import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentCreateWithoutClientInputObjectSchema as ClientPaymentCreateWithoutClientInputObjectSchema } from './ClientPaymentCreateWithoutClientInput.schema';
import { ClientPaymentUncheckedCreateWithoutClientInputObjectSchema as ClientPaymentUncheckedCreateWithoutClientInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutClientInput.schema';
import { ClientPaymentCreateOrConnectWithoutClientInputObjectSchema as ClientPaymentCreateOrConnectWithoutClientInputObjectSchema } from './ClientPaymentCreateOrConnectWithoutClientInput.schema';
import { ClientPaymentCreateManyClientInputEnvelopeObjectSchema as ClientPaymentCreateManyClientInputEnvelopeObjectSchema } from './ClientPaymentCreateManyClientInputEnvelope.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ClientPaymentUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientPaymentCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientPaymentCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientPaymentCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientPaymentCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateNestedManyWithoutClientInput>;
export const ClientPaymentCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
