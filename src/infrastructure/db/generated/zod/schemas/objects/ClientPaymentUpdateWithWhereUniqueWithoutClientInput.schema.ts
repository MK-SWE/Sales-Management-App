import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentUpdateWithoutClientInputObjectSchema as ClientPaymentUpdateWithoutClientInputObjectSchema } from './ClientPaymentUpdateWithoutClientInput.schema';
import { ClientPaymentUncheckedUpdateWithoutClientInputObjectSchema as ClientPaymentUncheckedUpdateWithoutClientInputObjectSchema } from './ClientPaymentUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientPaymentUpdateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const ClientPaymentUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientPaymentUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUpdateWithWhereUniqueWithoutClientInput>;
export const ClientPaymentUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
