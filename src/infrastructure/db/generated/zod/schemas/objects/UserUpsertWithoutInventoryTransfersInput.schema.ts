import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutInventoryTransfersInputObjectSchema as UserUpdateWithoutInventoryTransfersInputObjectSchema } from './UserUpdateWithoutInventoryTransfersInput.schema';
import { UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema as UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema } from './UserUncheckedUpdateWithoutInventoryTransfersInput.schema';
import { UserCreateWithoutInventoryTransfersInputObjectSchema as UserCreateWithoutInventoryTransfersInputObjectSchema } from './UserCreateWithoutInventoryTransfersInput.schema';
import { UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema as UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema } from './UserUncheckedCreateWithoutInventoryTransfersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInventoryTransfersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInventoryTransfersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInventoryTransfersInput>;
export const UserUpsertWithoutInventoryTransfersInputObjectZodSchema = makeSchema();
