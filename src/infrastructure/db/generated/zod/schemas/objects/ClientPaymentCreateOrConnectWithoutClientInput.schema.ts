import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentCreateWithoutClientInputObjectSchema as ClientPaymentCreateWithoutClientInputObjectSchema } from './ClientPaymentCreateWithoutClientInput.schema';
import { ClientPaymentUncheckedCreateWithoutClientInputObjectSchema as ClientPaymentUncheckedCreateWithoutClientInputObjectSchema } from './ClientPaymentUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientPaymentCreateWithoutClientInputObjectSchema), z.lazy(() => ClientPaymentUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ClientPaymentCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientPaymentCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateOrConnectWithoutClientInput>;
export const ClientPaymentCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
