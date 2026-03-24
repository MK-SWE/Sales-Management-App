import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSaleReturnsInputObjectSchema as UserCreateWithoutSaleReturnsInputObjectSchema } from './UserCreateWithoutSaleReturnsInput.schema';
import { UserUncheckedCreateWithoutSaleReturnsInputObjectSchema as UserUncheckedCreateWithoutSaleReturnsInputObjectSchema } from './UserUncheckedCreateWithoutSaleReturnsInput.schema';
import { UserCreateOrConnectWithoutSaleReturnsInputObjectSchema as UserCreateOrConnectWithoutSaleReturnsInputObjectSchema } from './UserCreateOrConnectWithoutSaleReturnsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSaleReturnsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSaleReturnsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSaleReturnsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSaleReturnsInput>;
export const UserCreateNestedOneWithoutSaleReturnsInputObjectZodSchema = makeSchema();
