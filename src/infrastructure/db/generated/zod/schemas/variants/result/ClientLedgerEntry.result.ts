import * as z from 'zod';
import { LedgerEntryTypeSchema } from '../../enums/LedgerEntryType.schema';
import { DocumentTypeSchema } from '../../enums/DocumentType.schema';
// prettier-ignore
export const ClientLedgerEntryResultSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    type: LedgerEntryTypeSchema,
    amount: z.number(),
    balanceAfter: z.number(),
    referenceId: z.string().nullable(),
    referenceType: DocumentTypeSchema.nullable(),
    createdByUserId: z.string().nullable(),
    happenedAt: z.date(),
    createdAt: z.date(),
    client: z.unknown(),
    createdByUser: z.unknown().nullable()
}).strict();

export type ClientLedgerEntryResultType = z.infer<typeof ClientLedgerEntryResultSchema>;
