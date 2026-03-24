import * as z from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum(['id', 'orderId', 'ProductVariantId', 'quantity', 'unitPrice', 'snapshotSKU', 'snapshotAttributes', 'snapshotImages', 'snapshotProductName', 'snapshotProductId', 'createdAt', 'updatedAt'])

export type OrderItemScalarFieldEnum = z.infer<typeof OrderItemScalarFieldEnumSchema>;