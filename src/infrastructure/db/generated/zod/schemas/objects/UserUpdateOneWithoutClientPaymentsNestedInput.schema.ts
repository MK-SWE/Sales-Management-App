import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutClientPaymentsInputObjectSchema as UserCreateWithoutClientPaymentsInputObjectSchema } from './UserCreateWithoutClientPaymentsInput.schema';
import { UserUncheckedCreateWithoutClientPaymentsInputObjectSchema as UserUncheckedCreateWithoutClientPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutClientPaymentsInput.schema';
import { UserCreateOrConnectWithoutClientPaymentsInputObjectSchema as UserCreateOrConnectWithoutClientPaymentsInputObjectSchema } from './UserCreateOrConnectWithoutClientPaymentsInput.schema';
import { UserUpsertWithoutClientPaymentsInputObjectSchema as UserUpsertWithoutClientPaymentsInputObjectSchema } from './UserUpsertWithoutClientPaymentsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutClientPaymentsInputObjectSchema as UserUpdateToOneWithWhereWithoutClientPaymentsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutClientPaymentsInput.schema';
import { UserUpdateWithoutClientPaymentsInputObjectSchema as UserUpdateWithoutClientPaymentsInputObjectSchema } from './UserUpdateWithoutClientPaymentsInput.schema';
import { UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema as UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema } from './UserUncheckedUpdateWithoutClientPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutClientPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutClientPaymentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUpdateWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutClientPaymentsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutClientPaymentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutClientPaymentsNestedInput>;
export const UserUpdateOneWithoutClientPaymentsNestedInputObjectZodSchema = makeSchema();
