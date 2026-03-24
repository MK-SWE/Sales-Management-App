import * as z from 'zod';
export const ClientPaymentUpsertResultSchema = z.object({
  id: z.string(),
  paymentNumber: z.string(),
  clientId: z.string(),
  amount: z.number(),
  paymentDate: z.date(),
  notes: z.string().optional(),
  createdByUserId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  client: z.unknown(),
  createdByUser: z.unknown().optional()
});