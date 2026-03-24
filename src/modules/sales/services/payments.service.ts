import { 
  prisma, Decimal, LedgerEntryType, DocumentType 
} from '../../../infrastructure/db/prisma';
import { CreatePaymentSchema } from '../schemas/payment.schemas';
import { withSerializableRetry } from '../lib/transaction';
import { z } from 'zod';

export async function recordClientPayment(input: z.infer<typeof CreatePaymentSchema>, userId: string) {
  return withSerializableRetry(() => prisma.$transaction(async (tx) => {
    const amount = new Decimal(input.amount);
    const paymentNumber = `PAY-${Date.now()}`;
    const eventTime = new Date(input.paymentDate);

    const client = await tx.client.findUniqueOrThrow({ where: { id: input.clientId } });
    const newBalance = client.currentBalance.minus(amount);

    await tx.client.update({
      where: { id: input.clientId },
      data: { currentBalance: newBalance }
    });

    const payment = await tx.clientPayment.create({
      data: {
        paymentNumber,
        clientId: input.clientId,
        amount,
        paymentDate: eventTime,
        notes: input.notes,
        createdByUserId: userId,
      }
    });

    await tx.clientLedgerEntry.create({
      data: {
        clientId: input.clientId,
        type: LedgerEntryType.PAYMENT_RECEIPT,
        amount,
        balanceAfter: newBalance,
        referenceId: payment.id,
        referenceType: DocumentType.PAYMENT,
        happenedAt: eventTime,
        createdByUserId: userId,
      }
    });

    return payment;
  }, {
    isolationLevel: 'Serializable',
  }));
}
