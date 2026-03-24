import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantCreateWithoutSaleItemsInputObjectSchema as ProductVariantCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema)])
}).strict();
export const ProductVariantCreateOrConnectWithoutSaleItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutSaleItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutSaleItemsInput>;
export const ProductVariantCreateOrConnectWithoutSaleItemsInputObjectZodSchema = makeSchema();
