import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  reorderStock: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WarehouseVariantSettingMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingMaxOrderByAggregateInput>;
export const WarehouseVariantSettingMaxOrderByAggregateInputObjectZodSchema = makeSchema();
