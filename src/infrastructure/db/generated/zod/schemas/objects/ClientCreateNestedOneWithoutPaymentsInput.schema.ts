import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutPaymentsInputObjectSchema as ClientCreateWithoutPaymentsInputObjectSchema } from './ClientCreateWithoutPaymentsInput.schema';
import { ClientUncheckedCreateWithoutPaymentsInputObjectSchema as ClientUncheckedCreateWithoutPaymentsInputObjectSchema } from './ClientUncheckedCreateWithoutPaymentsInput.schema';
import { ClientCreateOrConnectWithoutPaymentsInputObjectSchema as ClientCreateOrConnectWithoutPaymentsInputObjectSchema } from './ClientCreateOrConnectWithoutPaymentsInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutPaymentsInput>;
export const ClientCreateNestedOneWithoutPaymentsInputObjectZodSchema = makeSchema();
