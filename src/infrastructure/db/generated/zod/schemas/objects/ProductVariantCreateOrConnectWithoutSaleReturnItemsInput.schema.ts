import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleReturnItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleReturnItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema)])
}).strict();
export const ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutSaleReturnItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutSaleReturnItemsInput>;
export const ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectZodSchema = makeSchema();
