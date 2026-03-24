import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutInventoryMovementsInputObjectSchema as UserUpdateWithoutInventoryMovementsInputObjectSchema } from './UserUpdateWithoutInventoryMovementsInput.schema';
import { UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema as UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema } from './UserUncheckedUpdateWithoutInventoryMovementsInput.schema';
import { UserCreateWithoutInventoryMovementsInputObjectSchema as UserCreateWithoutInventoryMovementsInputObjectSchema } from './UserCreateWithoutInventoryMovementsInput.schema';
import { UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema as UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './UserUncheckedCreateWithoutInventoryMovementsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInventoryMovementsInput>;
export const UserUpsertWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
