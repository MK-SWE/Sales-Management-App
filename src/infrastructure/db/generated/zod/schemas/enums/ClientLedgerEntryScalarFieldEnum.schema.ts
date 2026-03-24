import * as z from 'zod';

export const ClientLedgerEntryScalarFieldEnumSchema = z.enum(['id', 'clientId', 'type', 'amount', 'balanceAfter', 'referenceId', 'referenceType', 'createdByUserId', 'happenedAt', 'createdAt'])

export type ClientLedgerEntryScalarFieldEnum = z.infer<typeof ClientLedgerEntryScalarFieldEnumSchema>;