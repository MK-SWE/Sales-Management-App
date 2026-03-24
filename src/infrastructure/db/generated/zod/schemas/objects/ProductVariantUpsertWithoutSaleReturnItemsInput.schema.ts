import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUpdateWithoutSaleReturnItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutSaleReturnItemsInput.schema';
import { ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleReturnItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleReturnItemsInput.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema)]),
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantUpsertWithoutSaleReturnItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutSaleReturnItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpsertWithoutSaleReturnItemsInput>;
export const ProductVariantUpsertWithoutSaleReturnItemsInputObjectZodSchema = makeSchema();
