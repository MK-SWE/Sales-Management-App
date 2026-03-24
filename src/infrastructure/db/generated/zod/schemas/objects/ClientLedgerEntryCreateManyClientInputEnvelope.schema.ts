import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateManyClientInputObjectSchema as ClientLedgerEntryCreateManyClientInputObjectSchema } from './ClientLedgerEntryCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientLedgerEntryCreateManyClientInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientLedgerEntryCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientLedgerEntryCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateManyClientInputEnvelope>;
export const ClientLedgerEntryCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
