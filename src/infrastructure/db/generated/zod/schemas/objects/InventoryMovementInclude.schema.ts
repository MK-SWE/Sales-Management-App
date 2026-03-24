import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  warehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const InventoryMovementIncludeObjectSchema: z.ZodType<Prisma.InventoryMovementInclude> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementInclude>;
export const InventoryMovementIncludeObjectZodSchema = makeSchema();
