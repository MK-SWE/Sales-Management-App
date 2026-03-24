import * as z from 'zod';

export const InventoryMovementScalarFieldEnumSchema = z.enum(['id', 'warehouseId', 'variantId', 'type', 'quantity', 'referenceId', 'referenceType', 'createdByUserId', 'happenedAt', 'createdAt'])

export type InventoryMovementScalarFieldEnum = z.infer<typeof InventoryMovementScalarFieldEnumSchema>;