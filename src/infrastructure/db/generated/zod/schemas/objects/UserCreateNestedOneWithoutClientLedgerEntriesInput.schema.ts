import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutClientLedgerEntriesInputObjectSchema as UserCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserCreateWithoutClientLedgerEntriesInput.schema';
import { UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema as UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserUncheckedCreateWithoutClientLedgerEntriesInput.schema';
import { UserCreateOrConnectWithoutClientLedgerEntriesInputObjectSchema as UserCreateOrConnectWithoutClientLedgerEntriesInputObjectSchema } from './UserCreateOrConnectWithoutClientLedgerEntriesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutClientLedgerEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutClientLedgerEntriesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutClientLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutClientLedgerEntriesInput>;
export const UserCreateNestedOneWithoutClientLedgerEntriesInputObjectZodSchema = makeSchema();
