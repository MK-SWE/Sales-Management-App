import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantCreateWithoutSaleReturnItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutSaleReturnItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutSaleReturnItemsInput.schema';
import { ProductVariantUpsertWithoutSaleReturnItemsInputObjectSchema as ProductVariantUpsertWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUpsertWithoutSaleReturnItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInputObjectSchema as ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInput.schema';
import { ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUpdateWithoutSaleReturnItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutSaleReturnItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutSaleReturnItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutSaleReturnItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductVariantUpsertWithoutSaleReturnItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductVariantUpdateToOneWithWhereWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUpdateWithoutSaleReturnItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutSaleReturnItemsInputObjectSchema)]).optional()
}).strict();
export const ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInput>;
export const ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInputObjectZodSchema = makeSchema();
