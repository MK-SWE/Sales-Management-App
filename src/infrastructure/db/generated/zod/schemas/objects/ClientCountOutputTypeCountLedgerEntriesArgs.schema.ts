import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereInputObjectSchema as ClientLedgerEntryWhereInputObjectSchema } from './ClientLedgerEntryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountLedgerEntriesArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountLedgerEntriesArgsObjectZodSchema = makeSchema();
