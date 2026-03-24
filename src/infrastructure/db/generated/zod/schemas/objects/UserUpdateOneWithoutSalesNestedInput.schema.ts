import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSalesInputObjectSchema as UserCreateWithoutSalesInputObjectSchema } from './UserCreateWithoutSalesInput.schema';
import { UserUncheckedCreateWithoutSalesInputObjectSchema as UserUncheckedCreateWithoutSalesInputObjectSchema } from './UserUncheckedCreateWithoutSalesInput.schema';
import { UserCreateOrConnectWithoutSalesInputObjectSchema as UserCreateOrConnectWithoutSalesInputObjectSchema } from './UserCreateOrConnectWithoutSalesInput.schema';
import { UserUpsertWithoutSalesInputObjectSchema as UserUpsertWithoutSalesInputObjectSchema } from './UserUpsertWithoutSalesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSalesInputObjectSchema as UserUpdateToOneWithWhereWithoutSalesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSalesInput.schema';
import { UserUpdateWithoutSalesInputObjectSchema as UserUpdateWithoutSalesInputObjectSchema } from './UserUpdateWithoutSalesInput.schema';
import { UserUncheckedUpdateWithoutSalesInputObjectSchema as UserUncheckedUpdateWithoutSalesInputObjectSchema } from './UserUncheckedUpdateWithoutSalesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSalesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSalesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSalesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSalesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSalesInputObjectSchema), z.lazy(() => UserUpdateWithoutSalesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSalesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutSalesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutSalesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutSalesNestedInput>;
export const UserUpdateOneWithoutSalesNestedInputObjectZodSchema = makeSchema();
