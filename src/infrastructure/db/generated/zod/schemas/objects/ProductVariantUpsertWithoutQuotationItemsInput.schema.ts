import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantUpdateWithoutQuotationItemsInputObjectSchema as ProductVariantUpdateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUpdateWithoutQuotationItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutQuotationItemsInput.schema';
import { ProductVariantCreateWithoutQuotationItemsInputObjectSchema as ProductVariantCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantCreateWithoutQuotationItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutQuotationItemsInput.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductVariantUpdateWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema)]),
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantUpsertWithoutQuotationItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutQuotationItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpsertWithoutQuotationItemsInput>;
export const ProductVariantUpsertWithoutQuotationItemsInputObjectZodSchema = makeSchema();
