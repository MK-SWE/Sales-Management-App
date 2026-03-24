import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const QuotationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuotationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationMinOrderByAggregateInput>;
export const QuotationMinOrderByAggregateInputObjectZodSchema = makeSchema();
