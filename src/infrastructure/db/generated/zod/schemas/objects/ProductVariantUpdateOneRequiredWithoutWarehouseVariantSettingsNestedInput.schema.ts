import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantCreateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUpsertWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUpsertWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUpsertWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUpdateWithoutWarehouseVariantSettingsInput.schema';
import { ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema as ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutWarehouseVariantSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutWarehouseVariantSettingsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductVariantUpsertWithoutWarehouseVariantSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductVariantUpdateToOneWithWhereWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUpdateWithoutWarehouseVariantSettingsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutWarehouseVariantSettingsInputObjectSchema)]).optional()
}).strict();
export const ProductVariantUpdateOneRequiredWithoutWarehouseVariantSettingsNestedInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutWarehouseVariantSettingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutWarehouseVariantSettingsNestedInput>;
export const ProductVariantUpdateOneRequiredWithoutWarehouseVariantSettingsNestedInputObjectZodSchema = makeSchema();
