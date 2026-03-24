import * as z from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id', 'userId', 'label', 'address_line1', 'address_line2', 'city', 'state', 'country', 'postal_code', 'is_default', 'createdAt', 'updatedAt'])

export type AddressScalarFieldEnum = z.infer<typeof AddressScalarFieldEnumSchema>;