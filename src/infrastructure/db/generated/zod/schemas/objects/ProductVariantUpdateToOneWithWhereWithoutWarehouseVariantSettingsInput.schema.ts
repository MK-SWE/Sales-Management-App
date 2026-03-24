import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema';
import { ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUpdateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema)])
}).strict();
export const ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInput>;
export const ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInputObjectZodSchema = makeSchema();
