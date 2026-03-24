import * as z from 'zod';

export const SaleReturnItemScalarFieldEnumSchema = z.enum(['id', 'saleReturnId', 'variantId', 'quantity', 'refundPrice', 'lineTotal'])

export type SaleReturnItemScalarFieldEnum = z.infer<typeof SaleReturnItemScalarFieldEnumSchema>;