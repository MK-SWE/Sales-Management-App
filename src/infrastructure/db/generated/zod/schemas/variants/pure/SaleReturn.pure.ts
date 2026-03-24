import * as z from 'zod';
import { ReturnStatusSchema } from '../../enums/ReturnStatus.schema';
// prettier-ignore
export const SaleReturnModelSchema = z.object({
    id: z.string(),
    returnNumber: z.string(),
    originalSaleId: z.string().nullable(),
    warehouseId: z.string(),
    clientId: z.string().nullable(),
    status: ReturnStatusSchema,
    subtotal: z.number(),
    grandTotal: z.number(),
    notes: z.string().nullable(),
    returnedAt: z.date().nullable(),
    createdByUserId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    originalSale: z.unknown().nullable(),
    warehouse: z.unknown(),
    client: z.unknown().nullable(),
    createdByUser: z.unknown().nullable(),
    items: z.array(z.unknown())
}).strict();

export type SaleReturnPureType = z.infer<typeof SaleReturnModelSchema>;
