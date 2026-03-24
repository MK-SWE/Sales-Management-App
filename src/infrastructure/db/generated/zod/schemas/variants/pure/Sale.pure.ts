import * as z from 'zod';
import { PaymentMethodSchema } from '../../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
import { SaleStatusSchema } from '../../enums/SaleStatus.schema';
// prettier-ignore
export const SaleModelSchema = z.object({
    id: z.string(),
    saleNumber: z.string(),
    warehouseId: z.string(),
    clientId: z.string().nullable(),
    cashClientName: z.string().nullable(),
    paymentMethod: PaymentMethodSchema,
    paymentStatus: PaymentStatusSchema,
    status: SaleStatusSchema,
    subtotal: z.number(),
    grandTotal: z.number(),
    amountPaid: z.number(),
    amountDue: z.number(),
    notes: z.string().nullable(),
    soldAt: z.date().nullable(),
    createdByUserId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    warehouse: z.unknown(),
    client: z.unknown().nullable(),
    createdByUser: z.unknown().nullable(),
    items: z.array(z.unknown()),
    returns: z.array(z.unknown())
}).strict();

export type SalePureType = z.infer<typeof SaleModelSchema>;
