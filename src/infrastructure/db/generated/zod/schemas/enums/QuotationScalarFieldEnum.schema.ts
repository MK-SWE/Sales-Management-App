import * as z from 'zod';

export const QuotationScalarFieldEnumSchema = z.enum(['id', 'userId', 'status', 'notes', 'createdAt', 'updatedAt'])

export type QuotationScalarFieldEnum = z.infer<typeof QuotationScalarFieldEnumSchema>;