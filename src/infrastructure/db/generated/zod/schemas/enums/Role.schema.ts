import * as z from 'zod';

export const RoleSchema = z.enum(['SUPER_ADMIN', 'ADMIN', 'EMPLOYEE', 'CUSTOMER', 'GUEST'])

export type Role = z.infer<typeof RoleSchema>;