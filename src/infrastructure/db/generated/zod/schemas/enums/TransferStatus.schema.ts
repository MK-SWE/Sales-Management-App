import * as z from 'zod';

export const TransferStatusSchema = z.enum(['DRAFT', 'COMPLETED', 'CANCELLED'])

export type TransferStatus = z.infer<typeof TransferStatusSchema>;