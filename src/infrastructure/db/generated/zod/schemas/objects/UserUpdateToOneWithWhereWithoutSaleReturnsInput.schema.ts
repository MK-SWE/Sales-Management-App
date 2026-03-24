import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSaleReturnsInputObjectSchema as UserUpdateWithoutSaleReturnsInputObjectSchema } from './UserUpdateWithoutSaleReturnsInput.schema';
import { UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema as UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './UserUncheckedUpdateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSaleReturnsInput>;
export const UserUpdateToOneWithWhereWithoutSaleReturnsInputObjectZodSchema = makeSchema();
