import * as z from 'zod';
export const AuditLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    entityName: z.number(),
    entityId: z.number(),
    action: z.number(),
    changes: z.number(),
    userId: z.number(),
    createdAt: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    entityName: z.string().nullable(),
    entityId: z.string().nullable(),
    action: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    entityName: z.string().nullable(),
    entityId: z.string().nullable(),
    action: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});