import * as z from 'zod';

export const WarehouseStockScalarFieldEnumSchema = z.enum(['id', 'warehouseId', 'variantId', 'quantity', 'createdAt', 'updatedAt'])

export type WarehouseStockScalarFieldEnum = z.infer<typeof WarehouseStockScalarFieldEnumSchema>;