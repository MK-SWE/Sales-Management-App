import * as z from 'zod';

export const ReturnStatusSchema = z.enum(['DRAFT', 'COMPLETED', 'CANCELLED'])

export type ReturnStatus = z.infer<typeof ReturnStatusSchema>;