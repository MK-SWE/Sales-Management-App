import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutQuotationsInputObjectSchema as UserCreateWithoutQuotationsInputObjectSchema } from './UserCreateWithoutQuotationsInput.schema';
import { UserUncheckedCreateWithoutQuotationsInputObjectSchema as UserUncheckedCreateWithoutQuotationsInputObjectSchema } from './UserUncheckedCreateWithoutQuotationsInput.schema';
import { UserCreateOrConnectWithoutQuotationsInputObjectSchema as UserCreateOrConnectWithoutQuotationsInputObjectSchema } from './UserCreateOrConnectWithoutQuotationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutQuotationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutQuotationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutQuotationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutQuotationsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutQuotationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutQuotationsInput>;
export const UserCreateNestedOneWithoutQuotationsInputObjectZodSchema = makeSchema();
