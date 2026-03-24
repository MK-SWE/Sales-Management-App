import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutQuotationsInputObjectSchema as UserCreateWithoutQuotationsInputObjectSchema } from './UserCreateWithoutQuotationsInput.schema';
import { UserUncheckedCreateWithoutQuotationsInputObjectSchema as UserUncheckedCreateWithoutQuotationsInputObjectSchema } from './UserUncheckedCreateWithoutQuotationsInput.schema';
import { UserCreateOrConnectWithoutQuotationsInputObjectSchema as UserCreateOrConnectWithoutQuotationsInputObjectSchema } from './UserCreateOrConnectWithoutQuotationsInput.schema';
import { UserUpsertWithoutQuotationsInputObjectSchema as UserUpsertWithoutQuotationsInputObjectSchema } from './UserUpsertWithoutQuotationsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutQuotationsInputObjectSchema as UserUpdateToOneWithWhereWithoutQuotationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutQuotationsInput.schema';
import { UserUpdateWithoutQuotationsInputObjectSchema as UserUpdateWithoutQuotationsInputObjectSchema } from './UserUpdateWithoutQuotationsInput.schema';
import { UserUncheckedUpdateWithoutQuotationsInputObjectSchema as UserUncheckedUpdateWithoutQuotationsInputObjectSchema } from './UserUncheckedUpdateWithoutQuotationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutQuotationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutQuotationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutQuotationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutQuotationsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutQuotationsInputObjectSchema), z.lazy(() => UserUpdateWithoutQuotationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutQuotationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutQuotationsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutQuotationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutQuotationsNestedInput>;
export const UserUpdateOneWithoutQuotationsNestedInputObjectZodSchema = makeSchema();
