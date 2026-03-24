import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderInputSchema = z.object({
    id: z.string(),
    userId: z.string().optional().nullable(),
    user: z.unknown().optional().nullable(),
    quotationId: z.string(),
    quotation: z.unknown(),
    status: OrderStatusSchema,
    items: z.array(z.unknown()),
    totalAmount: z.number(),
    shippingAddressId: z.string().optional().nullable(),
    shippingAddress: z.unknown().optional().nullable(),
    snapshotAddress: z.unknown(),
    notes: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrderInputType = z.infer<typeof OrderInputSchema>;
