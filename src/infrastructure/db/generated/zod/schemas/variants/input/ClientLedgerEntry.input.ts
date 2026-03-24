import * as z from 'zod';
import { LedgerEntryTypeSchema } from '../../enums/LedgerEntryType.schema';
import { DocumentTypeSchema } from '../../enums/DocumentType.schema';
// prettier-ignore
export const ClientLedgerEntryInputSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    type: LedgerEntryTypeSchema,
    amount: z.number(),
    balanceAfter: z.number(),
    referenceId: z.string().optional().nullable(),
    referenceType: DocumentTypeSchema.optional().nullable(),
    createdByUserId: z.string().optional().nullable(),
    happenedAt: z.date(),
    createdAt: z.date(),
    client: z.unknown(),
    createdByUser: z.unknown().optional().nullable()
}).strict();

export type ClientLedgerEntryInputType = z.infer<typeof ClientLedgerEntryInputSchema>;
