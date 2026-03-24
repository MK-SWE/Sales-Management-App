import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'firstName', 'lastName', 'email', 'emailVerified', 'image', 'role', 'isBanned', 'banReason', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;