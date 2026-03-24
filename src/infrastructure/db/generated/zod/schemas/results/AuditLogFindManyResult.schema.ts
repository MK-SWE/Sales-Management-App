import * as z from 'zod';
export const AuditLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  entityName: z.string(),
  entityId: z.string(),
  action: z.string(),
  changes: z.unknown().optional(),
  userId: z.string().optional(),
  createdAt: z.date(),
  user: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});