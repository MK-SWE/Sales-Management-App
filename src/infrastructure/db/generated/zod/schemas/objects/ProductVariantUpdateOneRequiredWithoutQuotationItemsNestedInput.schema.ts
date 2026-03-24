import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCreateWithoutQuotationItemsInputObjectSchema as ProductVariantCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantCreateWithoutQuotationItemsInput.schema';
import { ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema as ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUncheckedCreateWithoutQuotationItemsInput.schema';
import { ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectSchema as ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectSchema } from './ProductVariantCreateOrConnectWithoutQuotationItemsInput.schema';
import { ProductVariantUpsertWithoutQuotationItemsInputObjectSchema as ProductVariantUpsertWithoutQuotationItemsInputObjectSchema } from './ProductVariantUpsertWithoutQuotationItemsInput.schema';
import { ProductVariantWhereUniqueInputObjectSchema as ProductVariantWhereUniqueInputObjectSchema } from './ProductVariantWhereUniqueInput.schema';
import { ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInputObjectSchema as ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInputObjectSchema } from './ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInput.schema';
import { ProductVariantUpdateWithoutQuotationItemsInputObjectSchema as ProductVariantUpdateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUpdateWithoutQuotationItemsInput.schema';
import { ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema as ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema } from './ProductVariantUncheckedUpdateWithoutQuotationItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductVariantCreateWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedCreateWithoutQuotationItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductVariantCreateOrConnectWithoutQuotationItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductVariantUpsertWithoutQuotationItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductVariantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductVariantUpdateToOneWithWhereWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUpdateWithoutQuotationItemsInputObjectSchema), z.lazy(() => ProductVariantUncheckedUpdateWithoutQuotationItemsInputObjectSchema)]).optional()
}).strict();
export const ProductVariantUpdateOneRequiredWithoutQuotationItemsNestedInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutQuotationItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateOneRequiredWithoutQuotationItemsNestedInput>;
export const ProductVariantUpdateOneRequiredWithoutQuotationItemsNestedInputObjectZodSchema = makeSchema();
