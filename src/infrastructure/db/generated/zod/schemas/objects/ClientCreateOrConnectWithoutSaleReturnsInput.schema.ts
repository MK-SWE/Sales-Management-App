import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutSaleReturnsInputObjectSchema as ClientCreateWithoutSaleReturnsInputObjectSchema } from './ClientCreateWithoutSaleReturnsInput.schema';
import { ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema as ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './ClientUncheckedCreateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutSaleReturnsInput>;
export const ClientCreateOrConnectWithoutSaleReturnsInputObjectZodSchema = makeSchema();
