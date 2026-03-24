import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentCreateWithoutCreatedByUserInput.schema';
import { ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientPaymentCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateOrConnectWithoutCreatedByUserInput>;
export const ClientPaymentCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
