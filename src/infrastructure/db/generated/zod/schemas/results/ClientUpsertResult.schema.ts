import * as z from 'zod';
export const ClientUpsertResultSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  isOpenAccountEnabled: z.boolean(),
  isBlocked: z.boolean(),
  creditLimit: z.number().optional(),
  currentBalance: z.number(),
  contactInfo: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ledgerEntries: z.array(z.unknown()),
  payments: z.array(z.unknown()),
  sales: z.array(z.unknown()),
  saleReturns: z.array(z.unknown())
});