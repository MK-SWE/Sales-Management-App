import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentUpdateWithoutClientInputObjectSchema as ClientPaymentUpdateWithoutClientInputObjectSchema } from './ClientPaymentUpdateWithoutClientInput.schema';
import { ClientPaymentUncheckedUpdateWithoutClientInputObjectSchema as ClientPaymentUncheckedUpdateWithoutClientInputObjectSchema } from './ClientPaymentUncheckedUpdateWithoutClientInput.schema';
import { ClientPaymentCreateWithoutClientInputObjectSchema as ClientPaymentCreateWithoutClientInputObjectSchema } from './ClientPaymentCreateWithoutClientInput.schema';
import { ClientPaymentUncheckedCreateWithoutClientInputObjectSchema as ClientPaymentUncheckedCreateWithoutClientInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientPaymentUpdateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ClientPaymentUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientPaymentUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUpsertWithWhereUniqueWithoutClientInput>;
export const ClientPaymentUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
