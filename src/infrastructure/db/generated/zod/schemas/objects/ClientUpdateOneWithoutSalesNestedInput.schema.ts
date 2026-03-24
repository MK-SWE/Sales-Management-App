import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutSalesInputObjectSchema as ClientCreateWithoutSalesInputObjectSchema } from './ClientCreateWithoutSalesInput.schema';
import { ClientUncheckedCreateWithoutSalesInputObjectSchema as ClientUncheckedCreateWithoutSalesInputObjectSchema } from './ClientUncheckedCreateWithoutSalesInput.schema';
import { ClientCreateOrConnectWithoutSalesInputObjectSchema as ClientCreateOrConnectWithoutSalesInputObjectSchema } from './ClientCreateOrConnectWithoutSalesInput.schema';
import { ClientUpsertWithoutSalesInputObjectSchema as ClientUpsertWithoutSalesInputObjectSchema } from './ClientUpsertWithoutSalesInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutSalesInputObjectSchema as ClientUpdateToOneWithWhereWithoutSalesInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutSalesInput.schema';
import { ClientUpdateWithoutSalesInputObjectSchema as ClientUpdateWithoutSalesInputObjectSchema } from './ClientUpdateWithoutSalesInput.schema';
import { ClientUncheckedUpdateWithoutSalesInputObjectSchema as ClientUncheckedUpdateWithoutSalesInputObjectSchema } from './ClientUncheckedUpdateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutSalesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSalesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutSalesInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutSalesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutSalesInputObjectSchema), z.lazy(() => ClientUpdateWithoutSalesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSalesInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutSalesNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutSalesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutSalesNestedInput>;
export const ClientUpdateOneWithoutSalesNestedInputObjectZodSchema = makeSchema();
