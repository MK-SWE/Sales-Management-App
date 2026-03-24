import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutSaleReturnsInputObjectSchema as ClientUpdateWithoutSaleReturnsInputObjectSchema } from './ClientUpdateWithoutSaleReturnsInput.schema';
import { ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema as ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './ClientUncheckedUpdateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSaleReturnsInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutSaleReturnsInput>;
export const ClientUpdateToOneWithWhereWithoutSaleReturnsInputObjectZodSchema = makeSchema();
