import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ClientUpdateWithoutLedgerEntriesInputObjectSchema as ClientUpdateWithoutLedgerEntriesInputObjectSchema } from './ClientUpdateWithoutLedgerEntriesInput.schema';
import { ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema as ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema } from './ClientUncheckedUpdateWithoutLedgerEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientUpdateWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema)])
}).strict();
export const ClientUpdateToOneWithWhereWithoutLedgerEntriesInputObjectSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutLedgerEntriesInput>;
export const ClientUpdateToOneWithWhereWithoutLedgerEntriesInputObjectZodSchema = makeSchema();
