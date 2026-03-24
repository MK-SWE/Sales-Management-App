import * as z from 'zod';

export const SaleScalarFieldEnumSchema = z.enum(['id', 'saleNumber', 'warehouseId', 'clientId', 'cashClientName', 'paymentMethod', 'paymentStatus', 'status', 'subtotal', 'grandTotal', 'amountPaid', 'amountDue', 'notes', 'soldAt', 'createdByUserId', 'createdAt', 'updatedAt'])

export type SaleScalarFieldEnum = z.infer<typeof SaleScalarFieldEnumSchema>;