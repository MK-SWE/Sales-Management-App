import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantWhereInputObjectSchema as ProductVariantWhereInputObjectSchema } from './ProductVariantWhereInput.schema';
import { ProductVariantUpdateWithoutTransferItemsInputObjectSchema as ProductVariantUpdateWithoutTransferItemsInputObjectSchema } from './ProductVariantUpdateWithoutTransferItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutTransferItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductVariantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductVariantUpdateWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema)])
}).strict();
export const ProductVariantUpdateToOneWithWhereWithoutTransferItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutTransferItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateToOneWithWhereWithoutTransferItemsInput>;
export const ProductVariantUpdateToOneWithWhereWithoutTransferItemsInputObjectZodSchema = makeSchema();
