import * as z from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id', 'userId', 'quotationId', 'status', 'totalAmount', 'shippingAddressId', 'snapshotAddress', 'notes', 'createdAt', 'updatedAt'])

export type OrderScalarFieldEnum = z.infer<typeof OrderScalarFieldEnumSchema>;