import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutSaleReturnsInputObjectSchema as UserUpdateWithoutSaleReturnsInputObjectSchema } from './UserUpdateWithoutSaleReturnsInput.schema';
import { UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema as UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './UserUncheckedUpdateWithoutSaleReturnsInput.schema';
import { UserCreateWithoutSaleReturnsInputObjectSchema as UserCreateWithoutSaleReturnsInputObjectSchema } from './UserCreateWithoutSaleReturnsInput.schema';
import { UserUncheckedCreateWithoutSaleReturnsInputObjectSchema as UserUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './UserUncheckedCreateWithoutSaleReturnsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSaleReturnsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSaleReturnsInput>;
export const UserUpsertWithoutSaleReturnsInputObjectZodSchema = makeSchema();
