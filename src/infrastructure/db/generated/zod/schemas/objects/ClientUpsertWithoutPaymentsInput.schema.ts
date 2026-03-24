import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutPaymentsInputObjectSchema as ClientUpdateWithoutPaymentsInputObjectSchema } from './ClientUpdateWithoutPaymentsInput.schema';
import { ClientUncheckedUpdateWithoutPaymentsInputObjectSchema as ClientUncheckedUpdateWithoutPaymentsInputObjectSchema } from './ClientUncheckedUpdateWithoutPaymentsInput.schema';
import { ClientCreateWithoutPaymentsInputObjectSchema as ClientCreateWithoutPaymentsInputObjectSchema } from './ClientCreateWithoutPaymentsInput.schema';
import { ClientUncheckedCreateWithoutPaymentsInputObjectSchema as ClientUncheckedCreateWithoutPaymentsInputObjectSchema } from './ClientUncheckedCreateWithoutPaymentsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutPaymentsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutPaymentsInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutPaymentsInput>;
export const ClientUpsertWithoutPaymentsInputObjectZodSchema = makeSchema();
