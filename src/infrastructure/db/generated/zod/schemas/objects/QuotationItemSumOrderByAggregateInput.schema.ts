import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const QuotationItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuotationItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemSumOrderByAggregateInput>;
export const QuotationItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
