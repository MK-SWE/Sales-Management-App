import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleReturnItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleReturnItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutSaleReturnItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateNestedOneWithoutSaleReturnItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutSaleReturnItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutSaleReturnItemsInput>;
export const ProductVariantCreateNestedOneWithoutSaleReturnItemsInputObjectZodSchema = makeSchema();
