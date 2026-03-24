import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantUpdateWithoutTransferItemsInputObjectSchema as ProductVariantUpdateWithoutTransferItemsInputObjectSchema } from './ProductVariantUpdateWithoutTransferItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutTransferItemsInput.schema';
import { ProductVariantCreateWithoutTransferItemsInputObjectSchema as ProductVariantCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantCreateWithoutTransferItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutTransferItemsInput.schema';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductVariantUpdateWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductVariantCreateWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema)]),
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantUpsertWithoutTransferItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpsertWithoutTransferItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpsertWithoutTransferItemsInput>;
export const ProductVariantUpsertWithoutTransferItemsInputObjectZodSchema = makeSchema();
