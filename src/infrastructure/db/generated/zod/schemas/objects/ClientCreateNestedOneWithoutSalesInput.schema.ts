import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutSalesInputObjectSchema as ClientCreateWithoutSalesInputObjectSchema } from './ClientCreateWithoutSalesInput.schema';
import { ClientUncheckedCreateWithoutSalesInputObjectSchema as ClientUncheckedCreateWithoutSalesInputObjectSchema } from './ClientUncheckedCreateWithoutSalesInput.schema';
import { ClientCreateOrConnectWithoutSalesInputObjectSchema as ClientCreateOrConnectWithoutSalesInputObjectSchema } from './ClientCreateOrConnectWithoutSalesInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutSalesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutSalesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutSalesInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutSalesInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutSalesInput>;
export const ClientCreateNestedOneWithoutSalesInputObjectZodSchema = makeSchema();
