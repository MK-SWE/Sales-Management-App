import * as z from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum(['id', 'entityName', 'entityId', 'action', 'changes', 'userId', 'createdAt'])

export type AuditLogScalarFieldEnum = z.infer<typeof AuditLogScalarFieldEnumSchema>;