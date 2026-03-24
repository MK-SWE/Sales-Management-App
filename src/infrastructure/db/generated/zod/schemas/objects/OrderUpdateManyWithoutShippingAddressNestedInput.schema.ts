import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutShippingAddressInputObjectSchema as OrderCreateWithoutShippingAddressInputObjectSchema } from './OrderCreateWithoutShippingAddressInput.schema';
import { OrderUncheckedCreateWithoutShippingAddressInputObjectSchema as OrderUncheckedCreateWithoutShippingAddressInputObjectSchema } from './OrderUncheckedCreateWithoutShippingAddressInput.schema';
import { OrderCreateOrConnectWithoutShippingAddressInputObjectSchema as OrderCreateOrConnectWithoutShippingAddressInputObjectSchema } from './OrderCreateOrConnectWithoutShippingAddressInput.schema';
import { OrderUpsertWithWhereUniqueWithoutShippingAddressInputObjectSchema as OrderUpsertWithWhereUniqueWithoutShippingAddressInputObjectSchema } from './OrderUpsertWithWhereUniqueWithoutShippingAddressInput.schema';
import { OrderCreateManyShippingAddressInputEnvelopeObjectSchema as OrderCreateManyShippingAddressInputEnvelopeObjectSchema } from './OrderCreateManyShippingAddressInputEnvelope.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithWhereUniqueWithoutShippingAddressInputObjectSchema as OrderUpdateWithWhereUniqueWithoutShippingAddressInputObjectSchema } from './OrderUpdateWithWhereUniqueWithoutShippingAddressInput.schema';
import { OrderUpdateManyWithWhereWithoutShippingAddressInputObjectSchema as OrderUpdateManyWithWhereWithoutShippingAddressInputObjectSchema } from './OrderUpdateManyWithWhereWithoutShippingAddressInput.schema';
import { OrderScalarWhereInputObjectSchema as OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderCreateWithoutShippingAddressInputObjectSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutShippingAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderCreateOrConnectWithoutShippingAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderUpsertWithWhereUniqueWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUpsertWithWhereUniqueWithoutShippingAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyShippingAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderUpdateWithWhereUniqueWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUpdateWithWhereUniqueWithoutShippingAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderUpdateManyWithWhereWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUpdateManyWithWhereWithoutShippingAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderScalarWhereInputObjectSchema), z.lazy(() => OrderScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrderUpdateManyWithoutShippingAddressNestedInputObjectSchema: z.ZodType<Prisma.OrderUpdateManyWithoutShippingAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderUpdateManyWithoutShippingAddressNestedInput>;
export const OrderUpdateManyWithoutShippingAddressNestedInputObjectZodSchema = makeSchema();
