import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUpdateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantCreateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema)]),
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantUpsertWithoutWarehouseVariantSettingsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutWarehouseVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpsertWithoutWarehouseVariantSettingsInput>;
export const ProductVariantUpsertWithoutWarehouseVariantSettingsInputObjectZodSchema = makeSchema();
