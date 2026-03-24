import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInventoryMovementsInputObjectSchema as UserUpdateWithoutInventoryMovementsInputObjectSchema } from './UserUpdateWithoutInventoryMovementsInput.schema';
import { UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema as UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema } from './UserUncheckedUpdateWithoutInventoryMovementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInventoryMovementsInput>;
export const UserUpdateToOneWithWhereWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
