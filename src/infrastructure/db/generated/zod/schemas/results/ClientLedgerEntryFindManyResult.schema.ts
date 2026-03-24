import * as z from 'zod';
export const ClientLedgerEntryFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});