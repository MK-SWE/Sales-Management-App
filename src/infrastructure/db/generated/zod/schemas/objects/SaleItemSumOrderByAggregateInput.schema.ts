import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  listPrice: SortOrderSchema.optional(),
  unitPrice: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional()
}).strict();
export const SaleItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemSumOrderByAggregateInput>;
export const SaleItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
