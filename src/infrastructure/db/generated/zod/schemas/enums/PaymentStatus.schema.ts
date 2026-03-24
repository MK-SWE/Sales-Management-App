import * as z from 'zod';

export const PaymentStatusSchema = z.enum(['UNPAID', 'PARTIAL', 'PAID'])

export type PaymentStatus = z.infer<typeof PaymentStatusSchema>;