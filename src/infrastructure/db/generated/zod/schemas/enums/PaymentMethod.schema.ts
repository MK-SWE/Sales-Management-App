import * as z from 'zod';

export const PaymentMethodSchema = z.enum(['CASH', 'OPEN_ACCOUNT'])

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;