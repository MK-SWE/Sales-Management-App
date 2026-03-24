import { 
  prisma, Prisma, Decimal, ReturnStatus, DocumentType, MovementType, LedgerEntryType 
} from '../../../infrastructure/db/prisma';
import { EntityNotFoundError } from '../domain/errors';
import { CreateReturnSchema } from '../schemas/sale.schemas';
import { withSerializableRetry } from '../lib/transaction';
import { z } from 'zod';

export async function recordSaleReturn(input: z.infer<typeof CreateReturnSchema>, userId: string) {
  return withSerializableRetry(() => prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const eventTime = new Date();
    const returnNumber = `RET-${Date.now()}`;
    let subtotal = new Decimal(0);

    const returnItemsData = [];
    for (const item of input.items) {
      const variant = await tx.productVariant.findUnique({ where: { id: item.productVariantId } });
      if (!variant) throw new EntityNotFoundError(`Variant ${item.productVariantId} not found`);

      const qty = new Decimal(item.quantity);
      const refundPrice = new Decimal(item.refundPrice);
      const lineTotal = qty.mul(refundPrice);
      subtotal = subtotal.plus(lineTotal);

      returnItemsData.push({ variantId: item.productVariantId, qty, refundPrice, lineTotal });
    }

    const saleReturn = await tx.saleReturn.create({
      data: {
        returnNumber,
        originalSaleId: input.originalSaleId,
        warehouseId: input.warehouseId,
        clientId: input.clientId,
        status: ReturnStatus.COMPLETED,
        subtotal,
        grandTotal: subtotal,
        notes: input.notes,
        returnedAt: eventTime,
        createdByUserId: userId,
      }
    });

    for (const item of returnItemsData) {
      await tx.saleReturnItem.create({
        data: {
          saleReturnId: saleReturn.id,
          variantId: item.variantId,
          quantity: item.qty,
          refundPrice: item.refundPrice,
          lineTotal: item.lineTotal,
        }
      });

      const stock = await tx.warehouseStock.findUnique({
        where: { warehouseId_variantId: { warehouseId: input.warehouseId, variantId: item.variantId } }
      });

      if (stock) {
        await tx.warehouseStock.update({
          where: { id: stock.id },
          data: { quantity: stock.quantity.plus(item.qty) }
        });
      } else {
        await tx.warehouseStock.create({
          data: { warehouseId: input.warehouseId, variantId: item.variantId, quantity: item.qty }
        });
      }

      await tx.inventoryMovement.create({
        data: {
          warehouseId: input.warehouseId,
          variantId: item.variantId,
          type: MovementType.RETURN,
          quantity: item.qty,
          referenceId: saleReturn.id,
          referenceType: DocumentType.RETURN,
          happenedAt: eventTime,
          createdByUserId: userId,
        }
      });
    }

    if (input.clientId) {
      const client = await tx.client.findUniqueOrThrow({ where: { id: input.clientId } });
      const newBalance = client.currentBalance.minus(subtotal);

      await tx.client.update({
        where: { id: input.clientId },
        data: { currentBalance: newBalance }
      });

      await tx.clientLedgerEntry.create({
        data: {
          clientId: input.clientId,
          type: LedgerEntryType.RETURN_CREDIT,
          amount: subtotal,
          balanceAfter: newBalance,
          referenceId: saleReturn.id,
          referenceType: DocumentType.RETURN,
          happenedAt: eventTime,
          createdByUserId: userId,
        }
      });
    }

    return saleReturn;
  }, {
    isolationLevel: 'Serializable',
  }));
}
