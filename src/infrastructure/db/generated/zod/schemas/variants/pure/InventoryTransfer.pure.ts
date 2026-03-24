import * as z from 'zod';
import { TransferStatusSchema } from '../../enums/TransferStatus.schema';
// prettier-ignore
export const InventoryTransferModelSchema = z.object({
    id: z.string(),
    transferNumber: z.string(),
    sourceWarehouseId: z.string(),
    destWarehouseId: z.string(),
    status: TransferStatusSchema,
    notes: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    transferredAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    sourceWarehouse: z.unknown(),
    destWarehouse: z.unknown(),
    createdByUser: z.unknown().nullable(),
    items: z.array(z.unknown())
}).strict();

export type InventoryTransferPureType = z.infer<typeof InventoryTransferModelSchema>;
