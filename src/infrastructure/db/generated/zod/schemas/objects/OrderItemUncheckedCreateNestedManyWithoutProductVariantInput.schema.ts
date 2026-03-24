import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemCreateWithoutProductVariantInputObjectSchema as OrderItemCreateWithoutProductVariantInputObjectSchema } from './OrderItemCreateWithoutProductVariantInput.schema';
import { OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema as OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductVariantInput.schema';
import { OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema as OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema } from './OrderItemCreateOrConnectWithoutProductVariantInput.schema';
import { OrderItemCreateManyProductVariantInputEnvelopeObjectSchema as OrderItemCreateManyProductVariantInputEnvelopeObjectSchema } from './OrderItemCreateManyProductVariantInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemCreateWithoutProductVariantInputObjectSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductVariantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrderItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutProductVariantInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutProductVariantInput>;
export const OrderItemUncheckedCreateNestedManyWithoutProductVariantInputObjectZodSchema = makeSchema();
