import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './WarehouseOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  warehouseId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  referenceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  happenedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  warehouse: z.lazy(() => WarehouseOrderByWithRelationInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const InventoryMovementOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InventoryMovementOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementOrderByWithRelationInput>;
export const InventoryMovementOrderByWithRelationInputObjectZodSchema = makeSchema();
