import * as z from 'zod';
// prettier-ignore
export const AuditLogInputSchema = z.object({
    id: z.string(),
    entityName: z.string(),
    entityId: z.string(),
    action: z.string(),
    changes: z.unknown().optional().nullable(),
    userId: z.string().optional().nullable(),
    createdAt: z.date(),
    user: z.unknown().optional().nullable()
}).strict();

export type AuditLogInputType = z.infer<typeof AuditLogInputSchema>;
