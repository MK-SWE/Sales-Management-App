import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutPaymentsInputObjectSchema as ClientUpdateWithoutPaymentsInputObjectSchema } from './ClientUpdateWithoutPaymentsInput.schema';
import { ClientUncheckedUpdateWithoutPaymentsInputObjectSchema as ClientUncheckedUpdateWithoutPaymentsInputObjectSchema } from './ClientUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutPaymentsInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutPaymentsInput>;
export const ClientUpdateToOneWithWhereWithoutPaymentsInputObjectZodSchema = makeSchema();
