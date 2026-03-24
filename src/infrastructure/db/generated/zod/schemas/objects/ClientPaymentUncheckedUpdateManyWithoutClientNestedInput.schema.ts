import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentCreateWithoutClientInputObjectSchema as ClientPaymentCreateWithoutClientInputObjectSchema } from './ClientPaymentCreateWithoutClientInput.schema';
import { ClientPaymentUncheckedCreateWithoutClientInputObjectSchema as ClientPaymentUncheckedCreateWithoutClientInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutClientInput.schema';
import { ClientPaymentCreateOrConnectWithoutClientInputObjectSchema as ClientPaymentCreateOrConnectWithoutClientInputObjectSchema } from './ClientPaymentCreateOrConnectWithoutClientInput.schema';
import { ClientPaymentUpsertWithWhereUniqueWithoutClientInputObjectSchema as ClientPaymentUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './ClientPaymentUpsertWithWhereUniqueWithoutClientInput.schema';
import { ClientPaymentCreateManyClientInputEnvelopeObjectSchema as ClientPaymentCreateManyClientInputEnvelopeObjectSchema } from './ClientPaymentCreateManyClientInputEnvelope.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentUpdateWithWhereUniqueWithoutClientInputObjectSchema as ClientPaymentUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './ClientPaymentUpdateWithWhereUniqueWithoutClientInput.schema';
import { ClientPaymentUpdateManyWithWhereWithoutClientInputObjectSchema as ClientPaymentUpdateManyWithWhereWithoutClientInputObjectSchema } from './ClientPaymentUpdateManyWithWhereWithoutClientInput.schema';
import { ClientPaymentScalarWhereInputObjectSchema as ClientPaymentScalarWhereInputObjectSchema } from './ClientPaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ClientPaymentUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientPaymentCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientPaymentUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientPaymentCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientPaymentUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientPaymentUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientPaymentScalarWhereInputObjectSchema), z.lazy(() => ClientPaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientPaymentUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.ClientPaymentUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUncheckedUpdateManyWithoutClientNestedInput>;
export const ClientPaymentUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
