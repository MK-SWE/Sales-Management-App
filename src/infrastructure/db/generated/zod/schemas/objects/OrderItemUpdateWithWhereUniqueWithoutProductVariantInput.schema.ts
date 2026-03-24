import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductVariantInputObjectSchema as OrderItemUpdateWithoutProductVariantInputObjectSchema } from './OrderItemUpdateWithoutProductVariantInput.schema';
import { OrderItemUncheckedUpdateWithoutProductVariantInputObjectSchema as OrderItemUncheckedUpdateWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrderItemUpdateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutProductVariantInputObjectSchema)])
}).strict();
export const OrderItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductVariantInput>;
export const OrderItemUpdateWithWhereUniqueWithoutProductVariantInputObjectZodSchema = makeSchema();
