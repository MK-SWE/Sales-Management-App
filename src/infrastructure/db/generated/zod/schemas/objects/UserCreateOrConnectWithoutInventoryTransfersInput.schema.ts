import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInventoryTransfersInputObjectSchema as UserCreateWithoutInventoryTransfersInputObjectSchema } from './UserCreateWithoutInventoryTransfersInput.schema';
import { UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema as UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema } from './UserUncheckedCreateWithoutInventoryTransfersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryTransfersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInventoryTransfersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInventoryTransfersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInventoryTransfersInput>;
export const UserCreateOrConnectWithoutInventoryTransfersInputObjectZodSchema = makeSchema();
