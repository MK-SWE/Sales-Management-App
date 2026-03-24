import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInventoryMovementsInputObjectSchema as UserCreateWithoutInventoryMovementsInputObjectSchema } from './UserCreateWithoutInventoryMovementsInput.schema';
import { UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema as UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema } from './UserUncheckedCreateWithoutInventoryMovementsInput.schema';
import { UserCreateOrConnectWithoutInventoryMovementsInputObjectSchema as UserCreateOrConnectWithoutInventoryMovementsInputObjectSchema } from './UserCreateOrConnectWithoutInventoryMovementsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInventoryMovementsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInventoryMovementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInventoryMovementsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInventoryMovementsInput>;
export const UserCreateNestedOneWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
