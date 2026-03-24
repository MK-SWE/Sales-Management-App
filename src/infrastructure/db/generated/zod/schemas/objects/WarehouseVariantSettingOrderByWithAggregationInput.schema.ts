import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WarehouseVariantSettingCountOrderByAggregateInputObjectSchema as WarehouseVariantSettingCountOrderByAggregateInputObjectSchema } from './WarehouseVariantSettingCountOrderByAggregateInput.schema';
import { WarehouseVariantSettingAvgOrderByAggregateInputObjectSchema as WarehouseVariantSettingAvgOrderByAggregateInputObjectSchema } from './WarehouseVariantSettingAvgOrderByAggregateInput.schema';
import { WarehouseVariantSettingMaxOrderByAggregateInputObjectSchema as WarehouseVariantSettingMaxOrderByAggregateInputObjectSchema } from './WarehouseVariantSettingMaxOrderByAggregateInput.schema';
import { WarehouseVariantSettingMinOrderByAggregateInputObjectSchema as WarehouseVariantSettingMinOrderByAggregateInputObjectSchema } from './WarehouseVariantSettingMinOrderByAggregateInput.schema';
import { WarehouseVariantSettingSumOrderByAggregateInputObjectSchema as WarehouseVariantSettingSumOrderByAggregateInputObjectSchema } from './WarehouseVariantSettingSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  reorderStock: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WarehouseVariantSettingCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WarehouseVariantSettingAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WarehouseVariantSettingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WarehouseVariantSettingMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WarehouseVariantSettingSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WarehouseVariantSettingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingOrderByWithAggregationInput>;
export const WarehouseVariantSettingOrderByWithAggregationInputObjectZodSchema = makeSchema();
