import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional(),
  balanceAfter: z.literal(true).optional()
}).strict();
export const ClientLedgerEntryAvgAggregateInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryAvgAggregateInputType>;
export const ClientLedgerEntryAvgAggregateInputObjectZodSchema = makeSchema();
