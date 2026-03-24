import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutClientLedgerEntriesInputObjectSchema as UserCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserCreateWithoutClientLedgerEntriesInput.schema';
import { UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema as UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema } from './UserUncheckedCreateWithoutClientLedgerEntriesInput.schema';
import { UserCreateOrConnectWithoutClientLedgerEntriesInputObjectSchema as UserCreateOrConnectWithoutClientLedgerEntriesInputObjectSchema } from './UserCreateOrConnectWithoutClientLedgerEntriesInput.schema';
import { UserUpsertWithoutClientLedgerEntriesInputObjectSchema as UserUpsertWithoutClientLedgerEntriesInputObjectSchema } from './UserUpsertWithoutClientLedgerEntriesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutClientLedgerEntriesInputObjectSchema as UserUpdateToOneWithWhereWithoutClientLedgerEntriesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutClientLedgerEntriesInput.schema';
import { UserUpdateWithoutClientLedgerEntriesInputObjectSchema as UserUpdateWithoutClientLedgerEntriesInputObjectSchema } from './UserUpdateWithoutClientLedgerEntriesInput.schema';
import { UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema as UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema } from './UserUncheckedUpdateWithoutClientLedgerEntriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutClientLedgerEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutClientLedgerEntriesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutClientLedgerEntriesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUpdateWithoutClientLedgerEntriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutClientLedgerEntriesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutClientLedgerEntriesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutClientLedgerEntriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutClientLedgerEntriesNestedInput>;
export const UserUpdateOneWithoutClientLedgerEntriesNestedInputObjectZodSchema = makeSchema();
