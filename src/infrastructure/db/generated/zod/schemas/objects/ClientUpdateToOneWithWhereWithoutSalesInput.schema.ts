import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutSalesInputObjectSchema as ClientUpdateWithoutSalesInputObjectSchema } from './ClientUpdateWithoutSalesInput.schema';
import { ClientUncheckedUpdateWithoutSalesInputObjectSchema as ClientUncheckedUpdateWithoutSalesInputObjectSchema } from './ClientUncheckedUpdateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutSalesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutSalesInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutSalesInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutSalesInput>;
export const ClientUpdateToOneWithWhereWithoutSalesInputObjectZodSchema = makeSchema();
