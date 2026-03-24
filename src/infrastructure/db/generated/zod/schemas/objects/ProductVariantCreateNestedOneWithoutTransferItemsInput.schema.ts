import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutTransferItemsInputObjectSchema as ProductVariantCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantCreateWithoutTransferItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutTransferItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutTransferItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutTransferItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutTransferItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutTransferItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateNestedOneWithoutTransferItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutTransferItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateNestedOneWithoutTransferItemsInput>;
export const ProductVariantCreateNestedOneWithoutTransferItemsInputObjectZodSchema = makeSchema();
