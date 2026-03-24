import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const WarehouseStockSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseStockSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockSumOrderByAggregateInput>;
export const WarehouseStockSumOrderByAggregateInputObjectZodSchema = makeSchema();
