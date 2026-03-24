import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WarehouseStockCountOrderByAggregateInputObjectSchema as WarehouseStockCountOrderByAggregateInputObjectSchema } from './WarehouseStockCountOrderByAggregateInput.schema';
import { WarehouseStockAvgOrderByAggregateInputObjectSchema as WarehouseStockAvgOrderByAggregateInputObjectSchema } from './WarehouseStockAvgOrderByAggregateInput.schema';
import { WarehouseStockMaxOrderByAggregateInputObjectSchema as WarehouseStockMaxOrderByAggregateInputObjectSchema } from './WarehouseStockMaxOrderByAggregateInput.schema';
import { WarehouseStockMinOrderByAggregateInputObjectSchema as WarehouseStockMinOrderByAggregateInputObjectSchema } from './WarehouseStockMinOrderByAggregateInput.schema';
import { WarehouseStockSumOrderByAggregateInputObjectSchema as WarehouseStockSumOrderByAggregateInputObjectSchema } from './WarehouseStockSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WarehouseStockCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WarehouseStockAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WarehouseStockMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WarehouseStockMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WarehouseStockSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WarehouseStockOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WarehouseStockOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockOrderByWithAggregationInput>;
export const WarehouseStockOrderByWithAggregationInputObjectZodSchema = makeSchema();
