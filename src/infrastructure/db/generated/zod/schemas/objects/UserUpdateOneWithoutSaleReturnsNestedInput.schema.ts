import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSaleReturnsInputObjectSchema as UserCreateWithoutSaleReturnsInputObjectSchema } from './UserCreateWithoutSaleReturnsInput.schema';
import { UserUncheckedCreateWithoutSaleReturnsInputObjectSchema as UserUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './UserUncheckedCreateWithoutSaleReturnsInput.schema';
import { UserCreateOrConnectWithoutSaleReturnsInputObjectSchema as UserCreateOrConnectWithoutSaleReturnsInputObjectSchema } from './UserCreateOrConnectWithoutSaleReturnsInput.schema';
import { UserUpsertWithoutSaleReturnsInputObjectSchema as UserUpsertWithoutSaleReturnsInputObjectSchema } from './UserUpsertWithoutSaleReturnsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema as UserUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSaleReturnsInput.schema';
import { UserUpdateWithoutSaleReturnsInputObjectSchema as UserUpdateWithoutSaleReturnsInputObjectSchema } from './UserUpdateWithoutSaleReturnsInput.schema';
import { UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema as UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema } from './UserUncheckedUpdateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSaleReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSaleReturnsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSaleReturnsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUpdateWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSaleReturnsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutSaleReturnsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutSaleReturnsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutSaleReturnsNestedInput>;
export const UserUpdateOneWithoutSaleReturnsNestedInputObjectZodSchema = makeSchema();
