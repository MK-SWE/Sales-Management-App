import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  warehouseId: z.boolean().optional(),
  variantId: z.boolean().optional(),
  type: z.boolean().optional(),
  quantity: z.boolean().optional(),
  referenceId: z.boolean().optional(),
  referenceType: z.boolean().optional(),
  createdByUserId: z.boolean().optional(),
  happenedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  warehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const InventoryMovementSelectObjectSchema: z.ZodType<Prisma.InventoryMovementSelect> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementSelect>;
export const InventoryMovementSelectObjectZodSchema = makeSchema();
