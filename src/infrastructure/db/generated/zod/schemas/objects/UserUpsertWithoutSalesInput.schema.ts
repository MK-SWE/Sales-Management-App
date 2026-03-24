import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutSalesInputObjectSchema as UserUpdateWithoutSalesInputObjectSchema } from './UserUpdateWithoutSalesInput.schema';
import { UserUncheckedUpdateWithoutSalesInputObjectSchema as UserUncheckedUpdateWithoutSalesInputObjectSchema } from './UserUncheckedUpdateWithoutSalesInput.schema';
import { UserCreateWithoutSalesInputObjectSchema as UserCreateWithoutSalesInputObjectSchema } from './UserCreateWithoutSalesInput.schema';
import { UserUncheckedCreateWithoutSalesInputObjectSchema as UserUncheckedCreateWithoutSalesInputObjectSchema } from './UserUncheckedCreateWithoutSalesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSalesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSalesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSalesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSalesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSalesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSalesInput>;
export const UserUpsertWithoutSalesInputObjectZodSchema = makeSchema();
