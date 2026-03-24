import * as z from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id', 'code', 'name', 'isOpenAccountEnabled', 'isBlocked', 'creditLimit', 'currentBalance', 'contactInfo', 'createdAt', 'updatedAt'])

export type ClientScalarFieldEnum = z.infer<typeof ClientScalarFieldEnumSchema>;