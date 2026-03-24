import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutClientPaymentsInputObjectSchema as UserUpdateWithoutClientPaymentsInputObjectSchema } from './UserUpdateWithoutClientPaymentsInput.schema';
import { UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema as UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema } from './UserUncheckedUpdateWithoutClientPaymentsInput.schema';
import { UserCreateWithoutClientPaymentsInputObjectSchema as UserCreateWithoutClientPaymentsInputObjectSchema } from './UserCreateWithoutClientPaymentsInput.schema';
import { UserUncheckedCreateWithoutClientPaymentsInputObjectSchema as UserUncheckedCreateWithoutClientPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutClientPaymentsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientPaymentsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutClientPaymentsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutClientPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutClientPaymentsInput>;
export const UserUpsertWithoutClientPaymentsInputObjectZodSchema = makeSchema();
