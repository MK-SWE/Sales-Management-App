import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SaleItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SaleItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemOrderByRelationAggregateInput>;
export const SaleItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
