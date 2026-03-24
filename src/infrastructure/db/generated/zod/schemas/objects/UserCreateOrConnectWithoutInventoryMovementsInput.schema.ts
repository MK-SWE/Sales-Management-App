import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInventoryMovementsInputObjectSchema as UserCreateWithoutInventoryMovementsInputObjectSchema } from './UserCreateWithoutInventoryMovementsInput.schema';
import { UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema as UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './UserUncheckedCreateWithoutInventoryMovementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInventoryMovementsInput>;
export const UserCreateOrConnectWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
