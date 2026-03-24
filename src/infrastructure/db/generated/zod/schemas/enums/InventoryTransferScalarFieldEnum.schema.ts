import * as z from 'zod';

export const InventoryTransferScalarFieldEnumSchema = z.enum(['id', 'transferNumber', 'sourceWarehouseId', 'destWarehouseId', 'status', 'notes', 'createdByUserId', 'transferredAt', 'createdAt', 'updatedAt'])

export type InventoryTransferScalarFieldEnum = z.infer<typeof InventoryTransferScalarFieldEnumSchema>;