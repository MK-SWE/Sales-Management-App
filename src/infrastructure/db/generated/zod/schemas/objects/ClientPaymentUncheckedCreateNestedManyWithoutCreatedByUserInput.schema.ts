import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentCreateWithoutCreatedByUserInput.schema';
import { ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutCreatedByUserInput.schema';
import { ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema as ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './ClientPaymentCreateOrConnectWithoutCreatedByUserInput.schema';
import { ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectSchema as ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectSchema } from './ClientPaymentCreateManyCreatedByUserInputEnvelope.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema), z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInput>;
export const ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
