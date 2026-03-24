import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemCreateWithoutProductVariantInputObjectSchema as OrderItemCreateWithoutProductVariantInputObjectSchema } from './OrderItemCreateWithoutProductVariantInput.schema';
import { OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema as OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductVariantInput.schema';
import { OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema as OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema } from './OrderItemCreateOrConnectWithoutProductVariantInput.schema';
import { OrderItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema as OrderItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema } from './OrderItemUpsertWithWhereUniqueWithoutProductVariantInput.schema';
import { OrderItemCreateManyProductVariantInputEnvelopeObjectSchema as OrderItemCreateManyProductVariantInputEnvelopeObjectSchema } from './OrderItemCreateManyProductVariantInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema as OrderItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema } from './OrderItemUpdateWithWhereUniqueWithoutProductVariantInput.schema';
import { OrderItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema as OrderItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema } from './OrderItemUpdateManyWithWhereWithoutProductVariantInput.schema';
import { OrderItemScalarWhereInputObjectSchema as OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemCreateWithoutProductVariantInputObjectSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductVariantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemCreateOrConnectWithoutProductVariantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductVariantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductVariantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema), z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductVariantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema), z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductVariantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema), z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrderItemUpdateManyWithoutProductVariantNestedInputObjectSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutProductVariantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemUpdateManyWithoutProductVariantNestedInput>;
export const OrderItemUpdateManyWithoutProductVariantNestedInputObjectZodSchema = makeSchema();
