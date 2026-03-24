import * as z from 'zod';
// prettier-ignore
export const AuditLogModelSchema = z.object({
    id: z.string(),
    entityName: z.string(),
    entityId: z.string(),
    action: z.string(),
    changes: z.unknown().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date(),
    user: z.unknown().nullable()
}).strict();

export type AuditLogPureType = z.infer<typeof AuditLogModelSchema>;
