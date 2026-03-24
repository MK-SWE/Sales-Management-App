import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantCreateWithoutQuotationItemsInputObjectSchema as ProductVariantCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantCreateWithoutQuotationItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutQuotationItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema)])
}).strict();
export const ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutQuotationItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutQuotationItemsInput>;
export const ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectZodSchema = makeSchema();
