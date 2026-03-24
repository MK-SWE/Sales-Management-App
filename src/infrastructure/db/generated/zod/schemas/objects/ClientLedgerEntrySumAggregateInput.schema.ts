import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional(),
  balanceAfter: z.literal(true).optional()
}).strict();
export const ClientLedgerEntrySumAggregateInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntrySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntrySumAggregateInputType>;
export const ClientLedgerEntrySumAggregateInputObjectZodSchema = makeSchema();
