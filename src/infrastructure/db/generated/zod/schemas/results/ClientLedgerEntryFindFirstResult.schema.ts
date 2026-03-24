import * as z from 'zod';
export const ClientLedgerEntryFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  clientId: z.string(),
  type: z.unknown(),
  amount: z.number(),
  balanceAfter: z.number(),
  referenceId: z.string().optional(),
  referenceType: z.unknown().optional(),
  createdByUserId: z.string().optional(),
  happenedAt: z.date(),
  createdAt: z.date(),
  client: z.unknown(),
  createdByUser: z.unknown().optional()
}));