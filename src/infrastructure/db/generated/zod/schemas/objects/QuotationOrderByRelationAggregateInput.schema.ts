import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const QuotationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.QuotationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationOrderByRelationAggregateInput>;
export const QuotationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
