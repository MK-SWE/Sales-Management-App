import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  refundPrice: SortOrderSchema.optional(),
  lineTotal: SortOrderSchema.optional()
}).strict();
export const SaleReturnItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemAvgOrderByAggregateInput>;
export const SaleReturnItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
