import * as z from 'zod';
import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderModelSchema = z.object({
    id: z.string(),
    userId: z.string().nullable(),
    user: z.unknown().nullable(),
    quotationId: z.string(),
    quotation: z.unknown(),
    status: OrderStatusSchema,
    items: z.array(z.unknown()),
    totalAmount: z.number(),
    shippingAddressId: z.string().nullable(),
    shippingAddress: z.unknown().nullable(),
    snapshotAddress: z.unknown(),
    notes: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrderPureType = z.infer<typeof OrderModelSchema>;
