import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateManyCreatedByUserInputObjectSchema as ClientLedgerEntryCreateManyCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientLedgerEntryCreateManyCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientLedgerEntryCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateManyCreatedByUserInputEnvelope>;
export const ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
