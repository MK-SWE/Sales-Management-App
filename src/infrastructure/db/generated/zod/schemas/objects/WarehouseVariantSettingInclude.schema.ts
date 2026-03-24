import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  warehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const WarehouseVariantSettingIncludeObjectSchema: z.ZodType<Prisma.WarehouseVariantSettingInclude> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseVariantSettingInclude>;
export const WarehouseVariantSettingIncludeObjectZodSchema = makeSchema();
