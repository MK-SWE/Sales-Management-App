import * as z from 'zod';

export const LedgerEntryTypeSchema = z.enum(['SALE_CHARGE', 'RETURN_CREDIT', 'PAYMENT_RECEIPT', 'MANUAL_ADJUSTMENT'])

export type LedgerEntryType = z.infer<typeof LedgerEntryTypeSchema>;