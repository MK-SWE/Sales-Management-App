import * as z from 'zod';

export const WarehouseVariantSettingScalarFieldEnumSchema = z.enum(['id', 'warehouseId', 'variantId', 'reorderStock', 'createdAt', 'updatedAt'])

export type WarehouseVariantSettingScalarFieldEnum = z.infer<typeof WarehouseVariantSettingScalarFieldEnumSchema>;