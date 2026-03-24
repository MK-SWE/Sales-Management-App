import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutPaymentsInputObjectSchema as ClientCreateWithoutPaymentsInputObjectSchema } from './ClientCreateWithoutPaymentsInput.schema';
import { ClientUncheckedCreateWithoutPaymentsInputObjectSchema as ClientUncheckedCreateWithoutPaymentsInputObjectSchema } from './ClientUncheckedCreateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutPaymentsInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutPaymentsInput>;
export const ClientCreateOrConnectWithoutPaymentsInputObjectZodSchema = makeSchema();
