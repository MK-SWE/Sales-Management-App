import * as z from 'zod';
// prettier-ignore
export const WarehouseVariantSettingInputSchema = z.object({
    id: z.string(),
    warehouseId: z.string(),
    variantId: z.string(),
    reorderStock: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    warehouse: z.unknown(),
    variant: z.unknown()
}).strict();

export type WarehouseVariantSettingInputType = z.infer<typeof WarehouseVariantSettingInputSchema>;
