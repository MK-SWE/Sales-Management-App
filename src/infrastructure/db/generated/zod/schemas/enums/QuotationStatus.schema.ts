import * as z from 'zod';

export const QuotationStatusSchema = z.enum(['PENDING', 'REVIEWED', 'SENT', 'ACCEPTED', 'REJECTED', 'CLOSED'])

export type QuotationStatus = z.infer<typeof QuotationStatusSchema>;