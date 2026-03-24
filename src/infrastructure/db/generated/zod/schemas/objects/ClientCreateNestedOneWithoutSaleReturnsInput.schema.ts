import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutSaleReturnsInputObjectSchema as ClientCreateWithoutSaleReturnsInputObjectSchema } from './ClientCreateWithoutSaleReturnsInput.schema';
import { ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema as ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './ClientUncheckedCreateWithoutSaleReturnsInput.schema';
import { ClientCreateOrConnectWithoutSaleReturnsInputObjectSchema as ClientCreateOrConnectWithoutSaleReturnsInputObjectSchema } from './ClientCreateOrConnectWithoutSaleReturnsInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSaleReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutSaleReturnsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutSaleReturnsInput>;
export const ClientCreateNestedOneWithoutSaleReturnsInputObjectZodSchema = makeSchema();
