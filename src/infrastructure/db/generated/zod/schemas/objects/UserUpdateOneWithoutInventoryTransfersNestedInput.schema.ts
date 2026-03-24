import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInventoryTransfersInputObjectSchema as UserCreateWithoutInventoryTransfersInputObjectSchema } from './UserCreateWithoutInventoryTransfersInput.schema';
import { UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema as UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema } from './UserUncheckedCreateWithoutInventoryTransfersInput.schema';
import { UserCreateOrConnectWithoutInventoryTransfersInputObjectSchema as UserCreateOrConnectWithoutInventoryTransfersInputObjectSchema } from './UserCreateOrConnectWithoutInventoryTransfersInput.schema';
import { UserUpsertWithoutInventoryTransfersInputObjectSchema as UserUpsertWithoutInventoryTransfersInputObjectSchema } from './UserUpsertWithoutInventoryTransfersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInventoryTransfersInputObjectSchema as UserUpdateToOneWithWhereWithoutInventoryTransfersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInventoryTransfersInput.schema';
import { UserUpdateWithoutInventoryTransfersInputObjectSchema as UserUpdateWithoutInventoryTransfersInputObjectSchema } from './UserUpdateWithoutInventoryTransfersInput.schema';
import { UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema as UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema } from './UserUncheckedUpdateWithoutInventoryTransfersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInventoryTransfersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInventoryTransfersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUpdateWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutInventoryTransfersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutInventoryTransfersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutInventoryTransfersNestedInput>;
export const UserUpdateOneWithoutInventoryTransfersNestedInputObjectZodSchema = makeSchema();
