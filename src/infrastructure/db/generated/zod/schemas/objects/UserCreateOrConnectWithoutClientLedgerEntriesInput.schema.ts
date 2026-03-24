import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutClientLedgerEntriesInputObjectSchema as UserCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserCreateWithoutClientLedgerEntriesInput.schema';
import { UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema as UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserUncheckedCreateWithoutClientLedgerEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutClientLedgerEntriesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutClientLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutClientLedgerEntriesInput>;
export const UserCreateOrConnectWithoutClientLedgerEntriesInputObjectZodSchema = makeSchema();
