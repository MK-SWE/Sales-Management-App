import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInventoryMovementsInputObjectSchema as UserCreateWithoutInventoryMovementsInputObjectSchema } from './UserCreateWithoutInventoryMovementsInput.schema';
import { UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema as UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './UserUncheckedCreateWithoutInventoryMovementsInput.schema';
import { UserCreateOrConnectWithoutInventoryMovementsInputObjectSchema as UserCreateOrConnectWithoutInventoryMovementsInputObjectSchema } from './UserCreateOrConnectWithoutInventoryMovementsInput.schema';
import { UserUpsertWithoutInventoryMovementsInputObjectSchema as UserUpsertWithoutInventoryMovementsInputObjectSchema } from './UserUpsertWithoutInventoryMovementsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema as UserUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInventoryMovementsInput.schema';
import { UserUpdateWithoutInventoryMovementsInputObjectSchema as UserUpdateWithoutInventoryMovementsInputObjectSchema } from './UserUpdateWithoutInventoryMovementsInput.schema';
import { UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema as UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema } from './UserUncheckedUpdateWithoutInventoryMovementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInventoryMovementsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInventoryMovementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUpdateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInventoryMovementsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutInventoryMovementsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutInventoryMovementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutInventoryMovementsNestedInput>;
export const UserUpdateOneWithoutInventoryMovementsNestedInputObjectZodSchema = makeSchema();
