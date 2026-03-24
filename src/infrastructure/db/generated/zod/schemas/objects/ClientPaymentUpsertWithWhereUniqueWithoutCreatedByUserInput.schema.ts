import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentUpdateWithoutCreatedByUserInputObjectSchema as ClientPaymentUpdateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUpdateWithoutCreatedByUserInput.schema';
import { ClientPaymentUncheckedUpdateWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedUpdateWithoutCreatedByUserInput.schema';
import { ClientPaymentCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentCreateWithoutCreatedByUserInput.schema';
import { ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientPaymentUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const ClientPaymentUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
