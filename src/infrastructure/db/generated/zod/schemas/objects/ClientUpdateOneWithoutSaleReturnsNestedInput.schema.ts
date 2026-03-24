import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutSaleReturnsInputObjectSchema as ClientCreateWithoutSaleReturnsInputObjectSchema } from './ClientCreateWithoutSaleReturnsInput.schema';
import { ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema as ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './ClientUncheckedCreateWithoutSaleReturnsInput.schema';
import { ClientCreateOrConnectWithoutSaleReturnsInputObjectSchema as ClientCreateOrConnectWithoutSaleReturnsInputObjectSchema } from './ClientCreateOrConnectWithoutSaleReturnsInput.schema';
import { ClientUpsertWithoutSaleReturnsInputObjectSchema as ClientUpsertWithoutSaleReturnsInputObjectSchema } from './ClientUpsertWithoutSaleReturnsInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema as ClientUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutSaleReturnsInput.schema';
import { ClientUpdateWithoutSaleReturnsInputObjectSchema as ClientUpdateWithoutSaleReturnsInputObjectSchema } from './ClientUpdateWithoutSaleReturnsInput.schema';
import { ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema as ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './ClientUncheckedUpdateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutSaleReturnsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutSaleReturnsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ClientWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneWithoutSaleReturnsNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneWithoutSaleReturnsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneWithoutSaleReturnsNestedInput>;
export const ClientUpdateOneWithoutSaleReturnsNestedInputObjectZodSchema = makeSchema();
