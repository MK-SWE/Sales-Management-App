import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const QuotationItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.QuotationItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemOrderByRelationAggregateInput>;
export const QuotationItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
