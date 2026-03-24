import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSalesInputObjectSchema as UserCreateWithoutSalesInputObjectSchema } from './UserCreateWithoutSalesInput.schema';
import { UserUncheckedCreateWithoutSalesInputObjectSchema as UserUncheckedCreateWithoutSalesInputObjectSchema } from './UserUncheckedCreateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSalesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSalesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSalesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSalesInput>;
export const UserCreateOrConnectWithoutSalesInputObjectZodSchema = makeSchema();
