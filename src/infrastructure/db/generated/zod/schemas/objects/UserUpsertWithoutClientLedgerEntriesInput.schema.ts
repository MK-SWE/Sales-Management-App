import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutClientLedgerEntriesInputObjectSchema as UserUpdateWithoutClientLedgerEntriesInputObjectSchema } from './UserUpdateWithoutClientLedgerEntriesInput.schema';
import { UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema as UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema } from './UserUncheckedUpdateWithoutClientLedgerEntriesInput.schema';
import { UserCreateWithoutClientLedgerEntriesInputObjectSchema as UserCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserCreateWithoutClientLedgerEntriesInput.schema';
import { UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema as UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserUncheckedCreateWithoutClientLedgerEntriesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutClientLedgerEntriesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutClientLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutClientLedgerEntriesInput>;
export const UserUpsertWithoutClientLedgerEntriesInputObjectZodSchema = makeSchema();
