import * as z from 'zod';

export const SaleReturnScalarFieldEnumSchema = z.enum(['id', 'returnNumber', 'originalSaleId', 'warehouseId', 'clientId', 'status', 'subtotal', 'grandTotal', 'notes', 'returnedAt', 'createdByUserId', 'createdAt', 'updatedAt'])

export type SaleReturnScalarFieldEnum = z.infer<typeof SaleReturnScalarFieldEnumSchema>;