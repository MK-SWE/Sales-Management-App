import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentCreateWithoutCreatedByUserInput.schema';
import { ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutCreatedByUserInput.schema';
import { ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema as ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './ClientPaymentCreateOrConnectWithoutCreatedByUserInput.schema';
import { ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema as ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectSchema as ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectSchema } from './ClientPaymentCreateManyCreatedByUserInputEnvelope.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema as ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema as ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { ClientPaymentScalarWhereInputObjectSchema as ClientPaymentScalarWhereInputObjectSchema } from './ClientPaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientPaymentScalarWhereInputObjectSchema), z.lazy(() => ClientPaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientPaymentUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.ClientPaymentUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUpdateManyWithoutCreatedByUserNestedInput>;
export const ClientPaymentUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
