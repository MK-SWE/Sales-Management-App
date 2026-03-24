import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInventoryTransfersInputObjectSchema as UserCreateWithoutInventoryTransfersInputObjectSchema } from './UserCreateWithoutInventoryTransfersInput.schema';
import { UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema as UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema } from './UserUncheckedCreateWithoutInventoryTransfersInput.schema';
import { UserCreateOrConnectWithoutInventoryTransfersInputObjectSchema as UserCreateOrConnectWithoutInventoryTransfersInputObjectSchema } from './UserCreateOrConnectWithoutInventoryTransfersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInventoryTransfersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInventoryTransfersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInventoryTransfersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInventoryTransfersInput>;
export const UserCreateNestedOneWithoutInventoryTransfersInputObjectZodSchema = makeSchema();
