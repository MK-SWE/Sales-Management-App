import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSalesInputObjectSchema as UserCreateWithoutSalesInputObjectSchema } from './UserCreateWithoutSalesInput.schema';
import { UserUncheckedCreateWithoutSalesInputObjectSchema as UserUncheckedCreateWithoutSalesInputObjectSchema } from './UserUncheckedCreateWithoutSalesInput.schema';
import { UserCreateOrConnectWithoutSalesInputObjectSchema as UserCreateOrConnectWithoutSalesInputObjectSchema } from './UserCreateOrConnectWithoutSalesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSalesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSalesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSalesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSalesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSalesInput>;
export const UserCreateNestedOneWithoutSalesInputObjectZodSchema = makeSchema();
