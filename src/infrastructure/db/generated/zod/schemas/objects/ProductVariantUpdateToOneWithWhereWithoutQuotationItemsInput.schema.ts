import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema';
import { ProductVariantUpdateWithoutQuotationItemsInputObjectSchema as ProductVariantUpdateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUpdateWithoutQuotationItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutQuotationItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductVariantUpdateWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema)])
}).strict();
export const ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInput>;
export const ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInputObjectZodSchema = makeSchema();
