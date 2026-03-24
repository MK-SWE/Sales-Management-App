import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereInputObjectSchema as ClientLedgerEntryWhereInputObjectSchema } from './ClientLedgerEntryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ClientLedgerEntryWhereInputObjectSchema).optional(),
  some: z.lazy(() => ClientLedgerEntryWhereInputObjectSchema).optional(),
  none: z.lazy(() => ClientLedgerEntryWhereInputObjectSchema).optional()
}).strict();
export const ClientLedgerEntryListRelationFilterObjectSchema: z.ZodType<Prisma.ClientLedgerEntryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryListRelationFilter>;
export const ClientLedgerEntryListRelationFilterObjectZodSchema = makeSchema();
