import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WarehouseStockMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseStockMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockMaxOrderByAggregateInput>;
export const WarehouseStockMaxOrderByAggregateInputObjectZodSchema = makeSchema();
