import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  subtotal: SortOrderSchema.optional(),
  grandTotal: SortOrderSchema.optional()
}).strict();
export const SaleReturnAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnAvgOrderByAggregateInput>;
export const SaleReturnAvgOrderByAggregateInputObjectZodSchema = makeSchema();
