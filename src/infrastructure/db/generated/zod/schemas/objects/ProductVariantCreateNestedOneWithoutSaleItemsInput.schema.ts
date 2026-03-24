import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutSaleItemsInputObjectSchema as ProductVariantCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutSaleItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutSaleItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutSaleItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutSaleItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateNestedOneWithoutSaleItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutSaleItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutSaleItemsInput>;
export const ProductVariantCreateNestedOneWithoutSaleItemsInputObjectZodSchema = makeSchema();
