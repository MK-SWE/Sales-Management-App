import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutPaymentsInputObjectSchema as ClientCreateWithoutPaymentsInputObjectSchema } from './ClientCreateWithoutPaymentsInput.schema';
import { ClientUncheckedCreateWithoutPaymentsInputObjectSchema as ClientUncheckedCreateWithoutPaymentsInputObjectSchema } from './ClientUncheckedCreateWithoutPaymentsInput.schema';
import { ClientCreateOrConnectWithoutPaymentsInputObjectSchema as ClientCreateOrConnectWithoutPaymentsInputObjectSchema } from './ClientCreateOrConnectWithoutPaymentsInput.schema';
import { ClientUpsertWithoutPaymentsInputObjectSchema as ClientUpsertWithoutPaymentsInputObjectSchema } from './ClientUpsertWithoutPaymentsInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema as ClientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutPaymentsInput.schema';
import { ClientUpdateWithoutPaymentsInputObjectSchema as ClientUpdateWithoutPaymentsInputObjectSchema } from './ClientUpdateWithoutPaymentsInput.schema';
import { ClientUncheckedUpdateWithoutPaymentsInputObjectSchema as ClientUncheckedUpdateWithoutPaymentsInputObjectSchema } from './ClientUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutPaymentsInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutPaymentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutPaymentsNestedInput>;
export const ClientUpdateOneRequiredWithoutPaymentsNestedInputObjectZodSchema = makeSchema();
