import * as z from 'zod';

export const SaleItemScalarFieldEnumSchema = z.enum(['id', 'saleId', 'variantId', 'productNameSnapshot', 'skuSnapshot', 'attributesSnapshot', 'listPrice', 'unitPrice', 'quantity', 'lineTotal'])

export type SaleItemScalarFieldEnum = z.infer<typeof SaleItemScalarFieldEnumSchema>;