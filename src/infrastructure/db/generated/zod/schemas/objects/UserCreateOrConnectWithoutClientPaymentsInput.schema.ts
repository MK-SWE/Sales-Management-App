import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutClientPaymentsInputObjectSchema as UserCreateWithoutClientPaymentsInputObjectSchema } from './UserCreateWithoutClientPaymentsInput.schema';
import { UserUncheckedCreateWithoutClientPaymentsInputObjectSchema as UserUncheckedCreateWithoutClientPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutClientPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientPaymentsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutClientPaymentsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutClientPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutClientPaymentsInput>;
export const UserCreateOrConnectWithoutClientPaymentsInputObjectZodSchema = makeSchema();
