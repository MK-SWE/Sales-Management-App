import * as z from 'zod';

export const InventoryTransferItemScalarFieldEnumSchema = z.enum(['id', 'transferId', 'variantId', 'quantity'])

export type InventoryTransferItemScalarFieldEnum = z.infer<typeof InventoryTransferItemScalarFieldEnumSchema>;