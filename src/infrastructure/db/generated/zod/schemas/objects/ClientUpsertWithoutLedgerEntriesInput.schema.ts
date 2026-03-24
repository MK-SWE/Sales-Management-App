import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientUpdateWithoutLedgerEntriesInputObjectSchema as ClientUpdateWithoutLedgerEntriesInputObjectSchema } from './ClientUpdateWithoutLedgerEntriesInput.schema';
import { ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema as ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema } from './ClientUncheckedUpdateWithoutLedgerEntriesInput.schema';
import { ClientCreateWithoutLedgerEntriesInputObjectSchema as ClientCreateWithoutLedgerEntriesInputObjectSchema } from './ClientCreateWithoutLedgerEntriesInput.schema';
import { ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema as ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema } from './ClientUncheckedCreateWithoutLedgerEntriesInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientUpdateWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientCreateWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema)]),
  where: z.lazy(() => ClientWhereInputObjectSchema).optional()
}).strict();
export const ClientUpsertWithoutLedgerEntriesInputObjectSchema: z.ZodType<Prisma.ClientUpsertWithoutLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpsertWithoutLedgerEntriesInput>;
export const ClientUpsertWithoutLedgerEntriesInputObjectZodSchema = makeSchema();
