import * as z from 'zod';

export const OrderStatusSchema = z.enum(['PENDING_PAYMENT', 'PAID', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'REFUNDED'])

export type OrderStatus = z.infer<typeof OrderStatusSchema>;