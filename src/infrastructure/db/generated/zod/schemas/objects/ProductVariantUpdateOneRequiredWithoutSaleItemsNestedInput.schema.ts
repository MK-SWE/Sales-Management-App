import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutSaleItemsInputObjectSchema as ProductVariantCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutSaleItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutSaleItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutSaleItemsInput.schema';
import { ProductVariantUpsertWithoutSaleItemsInputObjectSchema as ProductVariantUpsertWithoutSaleItemsInputObjectSchema } from './ProductVariantUpsertWithoutSaleItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantUpdateToOneWithWhereWithoutSaleItemsInputObjectSchema as ProductVariantUpdateToOneWithWhereWithoutSaleItemsInputObjectSchema } from './ProductVariantUpdateToOneWithWhereWithoutSaleItemsInput.schema';
import { ProductVariantUpdateWithoutSaleItemsInputObjectSchema as ProductVariantUpdateWithoutSaleItemsInputObjectSchema } from './ProductVariantUpdateWithoutSaleItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutSaleItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutSaleItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductVariantUpsertWithoutSaleItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductVariantUpdateToOneWithWhereWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUpdateWithoutSaleItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutSaleItemsInputObjectSchema)]).optional()
}).strict();
export const ProductVariantUpdateOneRequiredWithoutSaleItemsNestedInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutSaleItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutSaleItemsNestedInput>;
export const ProductVariantUpdateOneRequiredWithoutSaleItemsNestedInputObjectZodSchema = makeSchema();
