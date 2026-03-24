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
export const QuotationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuotationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCountOrderByAggregateInput>;
export const QuotationCountOrderByAggregateInputObjectZodSchema = makeSchema();
