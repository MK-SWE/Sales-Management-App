import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  warehouseId: z.boolean().optional(),
  variantId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  warehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const WarehouseStockSelectObjectSchema: z.ZodType<Prisma.WarehouseStockSelect> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockSelect>;
export const WarehouseStockSelectObjectZodSchema = makeSchema();
