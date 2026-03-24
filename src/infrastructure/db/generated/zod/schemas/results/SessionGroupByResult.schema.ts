import * as z from 'zod';
export const SessionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  expiresAt: z.date(),
  token: z.string(),
  ipAddress: z.string(),
  userAgent: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    expiresAt: z.number(),
    token: z.number(),
    ipAddress: z.number(),
    userAgent: z.number(),
    userId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    expiresAt: z.date().nullable(),
    token: z.string().nullable(),
    ipAddress: z.string().nullable(),
    userAgent: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    expiresAt: z.date().nullable(),
    token: z.string().nullable(),
    ipAddress: z.string().nullable(),
    userAgent: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));