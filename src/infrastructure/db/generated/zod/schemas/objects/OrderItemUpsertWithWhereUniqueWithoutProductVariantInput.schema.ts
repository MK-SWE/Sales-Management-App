import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductVariantInputObjectSchema as OrderItemUpdateWithoutProductVariantInputObjectSchema } from './OrderItemUpdateWithoutProductVariantInput.schema';
import { OrderItemUncheckedUpdateWithoutProductVariantInputObjectSchema as OrderItemUncheckedUpdateWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductVariantInput.schema';
import { OrderItemCreateWithoutProductVariantInputObjectSchema as OrderItemCreateWithoutProductVariantInputObjectSchema } from './OrderItemCreateWithoutProductVariantInput.schema';
import { OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema as OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrderItemUpdateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutProductVariantInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema)])
}).strict();
export const OrderItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductVariantInput>;
export const OrderItemUpsertWithWhereUniqueWithoutProductVariantInputObjectZodSchema = makeSchema();
