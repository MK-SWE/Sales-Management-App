import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  balanceAfter: SortOrderSchema.optional(),
  referenceId: SortOrderSchema.optional(),
  referenceType: SortOrderSchema.optional(),
  createdByUserId: SortOrderSchema.optional(),
  happenedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ClientLedgerEntryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryCountOrderByAggregateInput>;
export const ClientLedgerEntryCountOrderByAggregateInputObjectZodSchema = makeSchema();
