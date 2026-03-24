import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional(),
  balanceAfter: SortOrderSchema.optional()
}).strict();
export const ClientLedgerEntryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryAvgOrderByAggregateInput>;
export const ClientLedgerEntryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
