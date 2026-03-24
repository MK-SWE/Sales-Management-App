import * as z from 'zod';
export const SessionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  expiresAt: z.date(),
  token: z.string(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown()
}));