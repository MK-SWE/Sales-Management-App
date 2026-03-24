import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional()
}).strict();
export const SaleReturnSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnSumOrderByAggregateInput>;
export const SaleReturnSumOrderByAggregateInputObjectZodSchema = makeSchema();
