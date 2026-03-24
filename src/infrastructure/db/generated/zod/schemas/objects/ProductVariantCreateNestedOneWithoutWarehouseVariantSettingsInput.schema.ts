import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantCreateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInput>;
export const ProductVariantCreateNestedOneWithoutWarehouseVariantSettingsInputObjectZodSchema = makeSchema();
