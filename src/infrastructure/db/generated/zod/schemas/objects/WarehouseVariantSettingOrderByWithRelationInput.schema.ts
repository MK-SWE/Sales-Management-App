import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './WarehouseOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  reorderStock: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  warehouse: z.lazy(() => WarehouseOrderByWithRelationInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WarehouseVariantSettingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingOrderByWithRelationInput>;
export const WarehouseVariantSettingOrderByWithRelationInputObjectZodSchema = makeSchema();
