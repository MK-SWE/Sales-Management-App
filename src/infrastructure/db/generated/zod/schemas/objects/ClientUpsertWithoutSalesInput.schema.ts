import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutSalesInputObjectSchema as ClientUpdateWithoutSalesInputObjectSchema } from './ClientUpdateWithoutSalesInput.schema';
import { ClientUncheckedUpdateWithoutSalesInputObjectSchema as ClientUncheckedUpdateWithoutSalesInputObjectSchema } from './ClientUncheckedUpdateWithoutSalesInput.schema';
import { ClientCreateWithoutSalesInputObjectSchema as ClientCreateWithoutSalesInputObjectSchema } from './ClientCreateWithoutSalesInput.schema';
import { ClientUncheckedCreateWithoutSalesInputObjectSchema as ClientUncheckedCreateWithoutSalesInputObjectSchema } from './ClientUncheckedCreateWithoutSalesInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutSalesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSalesInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutSalesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSalesInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutSalesInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutSalesInput>;
export const ClientUpsertWithoutSalesInputObjectZodSchema = makeSchema();
