import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutQuotationsInputObjectSchema as UserUpdateWithoutQuotationsInputObjectSchema } from './UserUpdateWithoutQuotationsInput.schema';
import { UserUncheckedUpdateWithoutQuotationsInputObjectSchema as UserUncheckedUpdateWithoutQuotationsInputObjectSchema } from './UserUncheckedUpdateWithoutQuotationsInput.schema';
import { UserCreateWithoutQuotationsInputObjectSchema as UserCreateWithoutQuotationsInputObjectSchema } from './UserCreateWithoutQuotationsInput.schema';
import { UserUncheckedCreateWithoutQuotationsInputObjectSchema as UserUncheckedCreateWithoutQuotationsInputObjectSchema } from './UserUncheckedCreateWithoutQuotationsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutQuotationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutQuotationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutQuotationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutQuotationsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutQuotationsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutQuotationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutQuotationsInput>;
export const UserUpsertWithoutQuotationsInputObjectZodSchema = makeSchema();
