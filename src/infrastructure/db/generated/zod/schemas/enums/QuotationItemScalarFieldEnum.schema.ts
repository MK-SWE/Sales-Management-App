import * as z from 'zod';

export const QuotationItemScalarFieldEnumSchema = z.enum(['id', 'quotationId', 'ProductVariantId', 'quantity', 'notes', 'snapshotSKU', 'snapshotAttributes', 'snapshotImages', 'snapshotProductName', 'snapshotProductId', 'createdAt', 'updatedAt'])

export type QuotationItemScalarFieldEnum = z.infer<typeof QuotationItemScalarFieldEnumSchema>;