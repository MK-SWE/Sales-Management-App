import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema';
import { ProductVariantUpdateWithoutSaleItemsInputObjectSchema as ProductVariantUpdateWithoutSaleItemsInputObjectSchema } from './ProductVariantUpdateWithoutSaleItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutSaleItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductVariantUpdateWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema)])
}).strict();
export const ProductVariantUpdateToOneWithWhereWithoutSaleItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutSaleItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutSaleItemsInput>;
export const ProductVariantUpdateToOneWithWhereWithoutSaleItemsInputObjectZodSchema = makeSchema();
