import * as z from 'zod';
import { ReturnStatusSchema } from '../../enums/ReturnStatus.schema';
// prettier-ignore
export const SaleReturnInputSchema = z.object({
    id: z.string(),
    returnNumber: z.string(),
    originalSaleId: z.string().optional().nullable(),
    warehouseId: z.string(),
    clientId: z.string().optional().nullable(),
    status: ReturnStatusSchema,
    subtotal: z.number(),
    grandTotal: z.number(),
    notes: z.string().optional().nullable(),
    returnedAt: z.date().optional().nullable(),
    createdByUserId: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    originalSale: z.unknown().optional().nullable(),
    warehouse: z.unknown(),
    client: z.unknown().optional().nullable(),
    createdByUser: z.unknown().optional().nullable(),
    items: z.array(z.unknown())
}).strict();

export type SaleReturnInputType = z.infer<typeof SaleReturnInputSchema>;
