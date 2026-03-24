import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantUpdateWithoutSaleItemsInputObjectSchema as ProductVariantUpdateWithoutSaleItemsInputObjectSchema } from './ProductVariantUpdateWithoutSaleItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutSaleItemsInput.schema';
import { ProductVariantCreateWithoutSaleItemsInputObjectSchema as ProductVariantCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleItemsInput.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductVariantUpdateWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema)]),
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantUpsertWithoutSaleItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutSaleItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpsertWithoutSaleItemsInput>;
export const ProductVariantUpsertWithoutSaleItemsInputObjectZodSchema = makeSchema();
