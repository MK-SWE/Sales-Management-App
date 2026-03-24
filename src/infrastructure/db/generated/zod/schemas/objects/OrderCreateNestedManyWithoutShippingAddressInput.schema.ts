import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateWithoutShippingAddressInputObjectSchema as OrderCreateWithoutShippingAddressInputObjectSchema } from './OrderCreateWithoutShippingAddressInput.schema';
import { OrderUncheckedCreateWithoutShippingAddressInputObjectSchema as OrderUncheckedCreateWithoutShippingAddressInputObjectSchema } from './OrderUncheckedCreateWithoutShippingAddressInput.schema';
import { OrderCreateOrConnectWithoutShippingAddressInputObjectSchema as OrderCreateOrConnectWithoutShippingAddressInputObjectSchema } from './OrderCreateOrConnectWithoutShippingAddressInput.schema';
import { OrderCreateManyShippingAddressInputEnvelopeObjectSchema as OrderCreateManyShippingAddressInputEnvelopeObjectSchema } from './OrderCreateManyShippingAddressInputEnvelope.schema';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderCreateWithoutShippingAddressInputObjectSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderUncheckedCreateWithoutShippingAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutShippingAddressInputObjectSchema), z.lazy(() => OrderCreateOrConnectWithoutShippingAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyShippingAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema), z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrderCreateNestedManyWithoutShippingAddressInputObjectSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutShippingAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateNestedManyWithoutShippingAddressInput>;
export const OrderCreateNestedManyWithoutShippingAddressInputObjectZodSchema = makeSchema();
