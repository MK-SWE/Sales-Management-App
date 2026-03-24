import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutQuotationsInputObjectSchema as UserCreateWithoutQuotationsInputObjectSchema } from './UserCreateWithoutQuotationsInput.schema';
import { UserUncheckedCreateWithoutQuotationsInputObjectSchema as UserUncheckedCreateWithoutQuotationsInputObjectSchema } from './UserUncheckedCreateWithoutQuotationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutQuotationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutQuotationsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutQuotationsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutQuotationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutQuotationsInput>;
export const UserCreateOrConnectWithoutQuotationsInputObjectZodSchema = makeSchema();
