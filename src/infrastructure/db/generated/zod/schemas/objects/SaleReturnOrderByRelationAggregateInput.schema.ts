import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SaleReturnOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SaleReturnOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnOrderByRelationAggregateInput>;
export const SaleReturnOrderByRelationAggregateInputObjectZodSchema = makeSchema();
