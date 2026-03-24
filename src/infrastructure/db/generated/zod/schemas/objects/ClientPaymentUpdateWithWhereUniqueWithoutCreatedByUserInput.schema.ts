import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentUpdateWithoutCreatedByUserInputObjectSchema as ClientPaymentUpdateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUpdateWithoutCreatedByUserInput.schema';
import { ClientPaymentUncheckedUpdateWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientPaymentUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const ClientPaymentUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
