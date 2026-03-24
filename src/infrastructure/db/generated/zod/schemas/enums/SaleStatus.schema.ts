import * as z from 'zod';

export const SaleStatusSchema = z.enum(['DRAFT', 'COMPLETED', 'CANCELLED'])

export type SaleStatus = z.infer<typeof SaleStatusSchema>;