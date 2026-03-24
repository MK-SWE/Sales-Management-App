import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentScalarWhereInputObjectSchema as ClientPaymentScalarWhereInputObjectSchema } from './ClientPaymentScalarWhereInput.schema';
import { ClientPaymentUpdateManyMutationInputObjectSchema as ClientPaymentUpdateManyMutationInputObjectSchema } from './ClientPaymentUpdateManyMutationInput.schema';
import { ClientPaymentUncheckedUpdateManyWithoutClientInputObjectSchema as ClientPaymentUncheckedUpdateManyWithoutClientInputObjectSchema } from './ClientPaymentUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientPaymentUpdateManyMutationInputObjectSchema), z.lazy(() => ClientPaymentUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const ClientPaymentUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientPaymentUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUpdateManyWithWhereWithoutClientInput>;
export const ClientPaymentUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
