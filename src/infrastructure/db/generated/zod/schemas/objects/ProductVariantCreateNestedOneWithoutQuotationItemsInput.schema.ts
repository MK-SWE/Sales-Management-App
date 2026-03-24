import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutQuotationItemsInputObjectSchema as ProductVariantCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantCreateWithoutQuotationItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutQuotationItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutQuotationItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateNestedOneWithoutQuotationItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutQuotationItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutQuotationItemsInput>;
export const ProductVariantCreateNestedOneWithoutQuotationItemsInputObjectZodSchema = makeSchema();
