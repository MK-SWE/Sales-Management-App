import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutQuotationsInputObjectSchema as UserUpdateWithoutQuotationsInputObjectSchema } from './UserUpdateWithoutQuotationsInput.schema';
import { UserUncheckedUpdateWithoutQuotationsInputObjectSchema as UserUncheckedUpdateWithoutQuotationsInputObjectSchema } from './UserUncheckedUpdateWithoutQuotationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutQuotationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutQuotationsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutQuotationsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutQuotationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutQuotationsInput>;
export const UserUpdateToOneWithWhereWithoutQuotationsInputObjectZodSchema = makeSchema();
