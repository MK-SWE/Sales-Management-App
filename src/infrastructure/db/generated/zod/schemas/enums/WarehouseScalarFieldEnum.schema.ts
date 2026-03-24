import * as z from 'zod';

export const WarehouseScalarFieldEnumSchema = z.enum(['id', 'code', 'name', 'location', 'isActive', 'createdAt', 'updatedAt'])

export type WarehouseScalarFieldEnum = z.infer<typeof WarehouseScalarFieldEnumSchema>;