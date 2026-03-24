import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSaleReturnsInputObjectSchema as UserCreateWithoutSaleReturnsInputObjectSchema } from './UserCreateWithoutSaleReturnsInput.schema';
import { UserUncheckedCreateWithoutSaleReturnsInputObjectSchema as UserUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './UserUncheckedCreateWithoutSaleReturnsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSaleReturnsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSaleReturnsInput>;
export const UserCreateOrConnectWithoutSaleReturnsInputObjectZodSchema = makeSchema();
