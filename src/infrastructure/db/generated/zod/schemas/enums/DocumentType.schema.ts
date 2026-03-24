import * as z from 'zod';

export const DocumentTypeSchema = z.enum(['SALE', 'RETURN', 'TRANSFER', 'PAYMENT', 'MANUAL_ADJUSTMENT', 'MIGRATION'])

export type DocumentType = z.infer<typeof DocumentTypeSchema>;