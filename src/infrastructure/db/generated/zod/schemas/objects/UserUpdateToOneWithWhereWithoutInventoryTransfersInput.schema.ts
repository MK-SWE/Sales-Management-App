import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInventoryTransfersInputObjectSchema as UserUpdateWithoutInventoryTransfersInputObjectSchema } from './UserUpdateWithoutInventoryTransfersInput.schema';
import { UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema as UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema } from './UserUncheckedUpdateWithoutInventoryTransfersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInventoryTransfersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInventoryTransfersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInventoryTransfersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInventoryTransfersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInventoryTransfersInput>;
export const UserUpdateToOneWithWhereWithoutInventoryTransfersInputObjectZodSchema = makeSchema();
