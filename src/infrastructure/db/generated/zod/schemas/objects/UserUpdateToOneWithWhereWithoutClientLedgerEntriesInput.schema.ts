import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutClientLedgerEntriesInputObjectSchema as UserUpdateWithoutClientLedgerEntriesInputObjectSchema } from './UserUpdateWithoutClientLedgerEntriesInput.schema';
import { UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema as UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema } from './UserUncheckedUpdateWithoutClientLedgerEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutClientLedgerEntriesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutClientLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutClientLedgerEntriesInput>;
export const UserUpdateToOneWithWhereWithoutClientLedgerEntriesInputObjectZodSchema = makeSchema();
