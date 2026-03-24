import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutProductVariantInputObjectSchema as OrderItemCreateWithoutProductVariantInputObjectSchema } from './OrderItemCreateWithoutProductVariantInput.schema';
import { OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema as OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductVariantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema)])
}).strict();
export const OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductVariantInput>;
export const OrderItemCreateOrConnectWithoutProductVariantInputObjectZodSchema = makeSchema();
