import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSalesInputObjectSchema as UserUpdateWithoutSalesInputObjectSchema } from './UserUpdateWithoutSalesInput.schema';
import { UserUncheckedUpdateWithoutSalesInputObjectSchema as UserUncheckedUpdateWithoutSalesInputObjectSchema } from './UserUncheckedUpdateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSalesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSalesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSalesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSalesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSalesInput>;
export const UserUpdateToOneWithWhereWithoutSalesInputObjectZodSchema = makeSchema();
