import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutSaleReturnsInputObjectSchema as ClientUpdateWithoutSaleReturnsInputObjectSchema } from './ClientUpdateWithoutSaleReturnsInput.schema';
import { ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema as ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './ClientUncheckedUpdateWithoutSaleReturnsInput.schema';
import { ClientCreateWithoutSaleReturnsInputObjectSchema as ClientCreateWithoutSaleReturnsInputObjectSchema } from './ClientCreateWithoutSaleReturnsInput.schema';
import { ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema as ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './ClientUncheckedCreateWithoutSaleReturnsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutSaleReturnsInput>;
export const ClientUpsertWithoutSaleReturnsInputObjectZodSchema = makeSchema();
