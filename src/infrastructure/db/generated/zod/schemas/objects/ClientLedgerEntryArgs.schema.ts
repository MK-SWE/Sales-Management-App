import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './ClientLedgerEntryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientLedgerEntrySelectObjectSchema).optional(),
  include: z.lazy(() => ClientLedgerEntryIncludeObjectSchema).optional()
}).strict();
export const ClientLedgerEntryArgsObjectSchema = makeSchema();
export const ClientLedgerEntryArgsObjectZodSchema = makeSchema();
