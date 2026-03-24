import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './WarehouseOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  warehouse: z.lazy(() => WarehouseOrderByWithRelationInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WarehouseStockOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WarehouseStockOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockOrderByWithRelationInput>;
export const WarehouseStockOrderByWithRelationInputObjectZodSchema = makeSchema();
