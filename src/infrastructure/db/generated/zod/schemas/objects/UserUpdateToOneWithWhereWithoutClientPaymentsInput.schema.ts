import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutClientPaymentsInputObjectSchema as UserUpdateWithoutClientPaymentsInputObjectSchema } from './UserUpdateWithoutClientPaymentsInput.schema';
import { UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema as UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema } from './UserUncheckedUpdateWithoutClientPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutClientPaymentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientPaymentsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutClientPaymentsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutClientPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutClientPaymentsInput>;
export const UserUpdateToOneWithWhereWithoutClientPaymentsInputObjectZodSchema = makeSchema();
