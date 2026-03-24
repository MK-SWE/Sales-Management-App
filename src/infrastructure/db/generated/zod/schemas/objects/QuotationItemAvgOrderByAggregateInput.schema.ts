import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const QuotationItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuotationItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemAvgOrderByAggregateInput>;
export const QuotationItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
