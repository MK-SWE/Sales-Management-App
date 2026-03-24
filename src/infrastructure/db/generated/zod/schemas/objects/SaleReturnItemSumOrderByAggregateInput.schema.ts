import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  refundPrice: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional()
}).strict();
export const SaleReturnItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemSumOrderByAggregateInput>;
export const SaleReturnItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
