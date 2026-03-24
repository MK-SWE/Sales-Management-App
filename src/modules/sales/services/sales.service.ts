import { 
  prisma, Decimal, PaymentMethod, PaymentStatus, SaleStatus, 
  DocumentType, MovementType, LedgerEntryType 
} from '../../../infrastructure/db/prisma';
import { InsufficientStockError, InvalidClientError, CreditLimitExceededError, EntityNotFoundError, ValidationError } from '../domain/errors';
import { CreateSaleSchema } from '../schemas/sale.schemas';
import { withSerializableRetry } from '../lib/transaction';
import { z } from 'zod';

export async function recordSale(input: z.infer<typeof CreateSaleSchema>, userId: string) {
  return withSerializableRetry(() => prisma.$transaction(async (tx) => {
    const eventTime = new Date();
    const saleNumber = `SAL-${Date.now()}`;

    let subtotal = new Decimal(0);
    const processedItems = [];

    for (const item of input.items) {
      const variant = await tx.productVariant.findUnique({
        where: { id: item.productVariantId },
        include: { product: true }
      });
      if (!variant) throw new EntityNotFoundError(`Variant ${item.productVariantId} not found`);

      const qty = new Decimal(item.quantity);
      const unitPrice = new Decimal(item.unitPrice);
      const lineTotal = qty.mul(unitPrice);
      subtotal = subtotal.plus(lineTotal);

      const stock = await tx.warehouseStock.findUnique({
        where: { warehouseId_variantId: { warehouseId: input.warehouseId, variantId: item.productVariantId } }
      });
      
      const currentQty = stock ? stock.quantity : new Decimal(0);
      if (currentQty.lessThan(qty)) {
        throw new InsufficientStockError(`Insufficient stock for SKU: ${variant.SKU}`);
      }

      processedItems.push({ variant, qty, unitPrice, lineTotal, stockId: stock!.id, currentQty });
    }

    const grandTotal = subtotal;
    const amountPaid = new Decimal(input.amountPaid);
    
    if (amountPaid.gt(grandTotal)) {
      throw new ValidationError("Amount paid cannot exceed grand total. Overpayments are not supported.");
    }

    const amountDue = grandTotal.minus(amountPaid);
    const paymentStatus = amountDue.lte(0) ? PaymentStatus.PAID : (amountPaid.gt(0) ? PaymentStatus.PARTIAL : PaymentStatus.UNPAID);

    if (input.paymentMethod === PaymentMethod.OPEN_ACCOUNT) {
      if (!input.clientId) throw new InvalidClientError("Client ID required for OPEN_ACCOUNT");
      const client = await tx.client.findUnique({ where: { id: input.clientId } });
      
      if (!client || !client.isOpenAccountEnabled || client.isBlocked) {
        throw new InvalidClientError("Client is not eligible for OPEN_ACCOUNT");
      }
      
      if (client.creditLimit !== null) {
        const projectedBalance = client.currentBalance.plus(amountDue);
        if (projectedBalance.gt(client.creditLimit)) {
          throw new CreditLimitExceededError(`Credit limit exceeded. Available credit: ${client.creditLimit.minus(client.currentBalance).toString()}`);
        }
      }
    }

    const sale = await tx.sale.create({
      data: {
        saleNumber,
        warehouseId: input.warehouseId,
        clientId: input.clientId,
        cashClientName: input.cashClientName,
        paymentMethod: input.paymentMethod as PaymentMethod,
        paymentStatus,
        status: SaleStatus.COMPLETED,
        subtotal,
        grandTotal,
        amountPaid,
        amountDue,
        notes: input.notes,
        soldAt: eventTime,
        createdByUserId: userId,
      }
    });

    for (const item of processedItems) {
      await tx.saleItem.create({
        data: {
          saleId: sale.id,
          variantId: item.variant.id,
          productNameSnapshot: item.variant.product.productName,
          skuSnapshot: item.variant.SKU,
          listPrice: item.variant.price,
          unitPrice: item.unitPrice,
          quantity: item.qty,
          lineTotal: item.lineTotal,
        }
      });

      await tx.warehouseStock.update({
        where: { id: item.stockId },
        data: { quantity: item.currentQty.minus(item.qty) }
      });

      await tx.inventoryMovement.create({
        data: {
          warehouseId: input.warehouseId,
          variantId: item.variant.id,
          type: MovementType.SALE,
          quantity: item.qty,
          referenceId: sale.id,
          referenceType: DocumentType.SALE,
          happenedAt: eventTime,
          createdByUserId: userId,
        }
      });
    }

    if (input.paymentMethod === PaymentMethod.OPEN_ACCOUNT && amountDue.gt(0)) {
      const client = await tx.client.findUniqueOrThrow({ where: { id: input.clientId } });
      const newBalance = client.currentBalance.plus(amountDue);

      await tx.client.update({
        where: { id: input.clientId },
        data: { currentBalance: newBalance }
      });

      await tx.clientLedgerEntry.create({
        data: {
          clientId: input.clientId!,
          type: LedgerEntryType.SALE_CHARGE,
          amount: amountDue,
          balanceAfter: newBalance,
          referenceId: sale.id,
          referenceType: DocumentType.SALE,
          happenedAt: eventTime,
          createdByUserId: userId,
        }
      });
    }

    return sale;
  }, {
    isolationLevel: 'Serializable',
  }));
}
