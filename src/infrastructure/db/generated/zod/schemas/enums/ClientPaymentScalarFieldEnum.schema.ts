import * as z from 'zod';

export const ClientPaymentScalarFieldEnumSchema = z.enum(['id', 'paymentNumber', 'clientId', 'amount', 'paymentDate', 'notes', 'createdByUserId', 'createdAt', 'updatedAt'])

export type ClientPaymentScalarFieldEnum = z.infer<typeof ClientPaymentScalarFieldEnumSchema>;