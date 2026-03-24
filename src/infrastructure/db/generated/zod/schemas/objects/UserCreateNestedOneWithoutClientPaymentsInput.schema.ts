import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutClientPaymentsInputObjectSchema as UserCreateWithoutClientPaymentsInputObjectSchema } from './UserCreateWithoutClientPaymentsInput.schema';
import { UserUncheckedCreateWithoutClientPaymentsInputObjectSchema as UserUncheckedCreateWithoutClientPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutClientPaymentsInput.schema';
import { UserCreateOrConnectWithoutClientPaymentsInputObjectSchema as UserCreateOrConnectWithoutClientPaymentsInputObjectSchema } from './UserCreateOrConnectWithoutClientPaymentsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutClientPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutClientPaymentsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutClientPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutClientPaymentsInput>;
export const UserCreateNestedOneWithoutClientPaymentsInputObjectZodSchema = makeSchema();
