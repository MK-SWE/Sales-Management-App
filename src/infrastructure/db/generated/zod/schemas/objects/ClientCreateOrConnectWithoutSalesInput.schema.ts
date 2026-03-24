import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutSalesInputObjectSchema as ClientCreateWithoutSalesInputObjectSchema } from './ClientCreateWithoutSalesInput.schema';
import { ClientUncheckedCreateWithoutSalesInputObjectSchema as ClientUncheckedCreateWithoutSalesInputObjectSchema } from './ClientUncheckedCreateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutSalesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSalesInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutSalesInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutSalesInput>;
export const ClientCreateOrConnectWithoutSalesInputObjectZodSchema = makeSchema();
