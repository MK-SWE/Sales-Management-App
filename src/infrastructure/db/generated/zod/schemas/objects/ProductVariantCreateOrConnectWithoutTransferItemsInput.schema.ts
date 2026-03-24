import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantCreateWithoutTransferItemsInputObjectSchema as ProductVariantCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantCreateWithoutTransferItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutTransferItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema)])
}).strict();
export const ProductVariantCreateOrConnectWithoutTransferItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutTransferItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateOrConnectWithoutTransferItemsInput>;
export const ProductVariantCreateOrConnectWithoutTransferItemsInputObjectZodSchema = makeSchema();
