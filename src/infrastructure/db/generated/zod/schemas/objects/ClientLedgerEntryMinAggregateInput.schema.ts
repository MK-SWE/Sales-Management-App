import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clientId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  balanceAfter: z.literal(true).optional(),
  referenceId: z.literal(true).optional(),
  referenceType: z.literal(true).optional(),
  createdByUserId: z.literal(true).optional(),
  happenedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ClientLedgerEntryMinAggregateInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryMinAggregateInputType>;
export const ClientLedgerEntryMinAggregateInputObjectZodSchema = makeSchema();
