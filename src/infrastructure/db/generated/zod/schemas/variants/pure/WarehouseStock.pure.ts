import * as z from 'zod';
// prettier-ignore
export const WarehouseStockModelSchema = z.object({
    id: z.string(),
    warehouseId: z.string(),
    variantId: z.string(),
    quantity: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    warehouse: z.unknown(),
    variant: z.unknown()
}).strict();

export type WarehouseStockPureType = z.infer<typeof WarehouseStockModelSchema>;
