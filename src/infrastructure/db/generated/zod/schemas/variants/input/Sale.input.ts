import * as z from 'zod';
import { PaymentMethodSchema } from '../../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
import { SaleStatusSchema } from '../../enums/SaleStatus.schema';
// prettier-ignore
export const SaleInputSchema = z.object({
    id: z.string(),
    saleNumber: z.string(),
    warehouseId: z.string(),
    clientId: z.string().optional().nullable(),
    cashClientName: z.string().optional().nullable(),
    paymentMethod: PaymentMethodSchema,
    paymentStatus: PaymentStatusSchema,
    status: SaleStatusSchema,
    subtotal: z.number(),
    grandTotal: z.number(),
    amountPaid: z.number(),
    amountDue: z.number(),
    notes: z.string().optional().nullable(),
    soldAt: z.date().optional().nullable(),
    createdByUserId: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    warehouse: z.unknown(),
    client: z.unknown().optional().nullable(),
    createdByUser: z.unknown().optional().nullable(),
    items: z.array(z.unknown()),
    returns: z.array(z.unknown())
}).strict();

export type SaleInputType = z.infer<typeof SaleInputSchema>;
