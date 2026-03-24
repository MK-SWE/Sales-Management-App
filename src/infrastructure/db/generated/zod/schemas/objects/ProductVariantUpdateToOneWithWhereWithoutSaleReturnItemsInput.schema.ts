import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema';
import { ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUpdateWithoutSaleReturnItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutSaleReturnItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema)])
}).strict();
export const ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInput>;
export const ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInputObjectZodSchema = makeSchema();
