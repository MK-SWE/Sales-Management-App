import * as z from 'zod';
import { TransferStatusSchema } from '../../enums/TransferStatus.schema';
// prettier-ignore
export const InventoryTransferInputSchema = z.object({
    id: z.string(),
    transferNumber: z.string(),
    sourceWarehouseId: z.string(),
    destWarehouseId: z.string(),
    status: TransferStatusSchema,
    notes: z.string().optional().nullable(),
    createdByUserId: z.string().optional().nullable(),
    transferredAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    sourceWarehouse: z.unknown(),
    destWarehouse: z.unknown(),
    createdByUser: z.unknown().optional().nullable(),
    items: z.array(z.unknown())
}).strict();

export type InventoryTransferInputType = z.infer<typeof InventoryTransferInputSchema>;
