import { 
  prisma, Prisma, Decimal, TransferStatus, MovementType, DocumentType 
} from '../../../infrastructure/db/prisma';
import { InsufficientStockError, InvalidTransferError } from '../domain/errors';
import { CreateTransferSchema } from '../schemas/transfer.schemas';
import { withSerializableRetry } from '../lib/transaction';
import { z } from 'zod';

export async function recordInventoryTransfer(input: z.infer<typeof CreateTransferSchema>, userId: string) {
  if (input.fromWarehouseId === input.toWarehouseId) {
    throw new InvalidTransferError("Source and destination warehouses must be different");
  }

  return withSerializableRetry(() => prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const eventTime = new Date();
    const transferNumber = `TRN-${Date.now()}`;

    const transfer = await tx.inventoryTransfer.create({
      data: {
        transferNumber,
        sourceWarehouseId: input.fromWarehouseId,
        destWarehouseId: input.toWarehouseId,
        status: TransferStatus.COMPLETED,
        notes: input.notes,
        transferredAt: eventTime,
        createdByUserId: userId,
      }
    });

    for (const item of input.items) {
      const qty = new Decimal(item.quantity);

      const sourceStock = await tx.warehouseStock.findUnique({
        where: { warehouseId_variantId: { warehouseId: input.fromWarehouseId, variantId: item.productVariantId } }
      });

      if (!sourceStock || sourceStock.quantity.lessThan(qty)) {
        throw new InsufficientStockError(`Insufficient stock in source warehouse for variant ${item.productVariantId}`);
      }

      await tx.warehouseStock.update({
        where: { id: sourceStock.id },
        data: { quantity: sourceStock.quantity.minus(qty) }
      });

      const destStock = await tx.warehouseStock.findUnique({
        where: { warehouseId_variantId: { warehouseId: input.toWarehouseId, variantId: item.productVariantId } }
      });

      if (destStock) {
        await tx.warehouseStock.update({
          where: { id: destStock.id },
          data: { quantity: destStock.quantity.plus(qty) }
        });
      } else {
        await tx.warehouseStock.create({
          data: { warehouseId: input.toWarehouseId, variantId: item.productVariantId, quantity: qty }
        });
      }

      await tx.inventoryTransferItem.create({
        data: { transferId: transfer.id, variantId: item.productVariantId, quantity: qty }
      });

      await tx.inventoryMovement.createMany({
        data: [
          {
            warehouseId: input.fromWarehouseId,
            variantId: item.productVariantId,
            type: MovementType.TRANSFER_OUT,
            quantity: qty,
            referenceId: transfer.id,
            referenceType: DocumentType.TRANSFER,
            happenedAt: eventTime,
            createdByUserId: userId,
          },
          {
            warehouseId: input.toWarehouseId,
            variantId: item.productVariantId,
            type: MovementType.TRANSFER_IN,
            quantity: qty,
            referenceId: transfer.id,
            referenceType: DocumentType.TRANSFER,
            happenedAt: eventTime,
            createdByUserId: userId,
          }
        ]
      });
    }

    return transfer;
  }, {
    isolationLevel: 'Serializable',
  }));
}
