import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutTransferItemsInputObjectSchema as ProductVariantCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantCreateWithoutTransferItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutTransferItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutTransferItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutTransferItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutTransferItemsInput.schema';
import { ProductVariantUpsertWithoutTransferItemsInputObjectSchema as ProductVariantUpsertWithoutTransferItemsInputObjectSchema } from './ProductVariantUpsertWithoutTransferItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantUpdateToOneWithWhereWithoutTransferItemsInputObjectSchema as ProductVariantUpdateToOneWithWhereWithoutTransferItemsInputObjectSchema } from './ProductVariantUpdateToOneWithWhereWithoutTransferItemsInput.schema';
import { ProductVariantUpdateWithoutTransferItemsInputObjectSchema as ProductVariantUpdateWithoutTransferItemsInputObjectSchema } from './ProductVariantUpdateWithoutTransferItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutTransferItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutTransferItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutTransferItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductVariantUpsertWithoutTransferItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductVariantUpdateToOneWithWhereWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUpdateWithoutTransferItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema)]).optional()
}).strict();
export const ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInput>;
export const ProductVariantUpdateOneRequiredWithoutTransferItemsNestedInputObjectZodSchema = makeSchema();
