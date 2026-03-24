import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantCreateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema)])
}).strict();
export const ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInput>;
export const ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectZodSchema = makeSchema();
