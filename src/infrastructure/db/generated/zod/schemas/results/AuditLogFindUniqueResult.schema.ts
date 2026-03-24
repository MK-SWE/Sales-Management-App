import * as z from 'zod';
export const AuditLogFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  entityName: z.string(),
  entityId: z.string(),
  action: z.string(),
  changes: z.unknown().optional(),
  userId: z.string().optional(),
  createdAt: z.date(),
  user: z.unknown().optional()
}));