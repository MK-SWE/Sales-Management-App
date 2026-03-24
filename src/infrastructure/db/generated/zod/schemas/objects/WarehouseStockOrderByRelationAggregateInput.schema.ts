import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WarehouseStockOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseStockOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockOrderByRelationAggregateInput>;
export const WarehouseStockOrderByRelationAggregateInputObjectZodSchema = makeSchema();
