import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentScalarWhereInputObjectSchema as ClientPaymentScalarWhereInputObjectSchema } from './ClientPaymentScalarWhereInput.schema';
import { ClientPaymentUpdateManyMutationInputObjectSchema as ClientPaymentUpdateManyMutationInputObjectSchema } from './ClientPaymentUpdateManyMutationInput.schema';
import { ClientPaymentUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientPaymentUpdateManyMutationInputObjectSchema), z.lazy(() => ClientPaymentUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInput>;
export const ClientPaymentUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
