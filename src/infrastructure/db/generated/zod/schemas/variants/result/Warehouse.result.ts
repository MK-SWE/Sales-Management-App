import * as z from 'zod';
// prettier-ignore
export const WarehouseResultSchema = z.object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    location: z.string().nullable(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    stocks: z.array(z.unknown()),
    variantSettings: z.array(z.unknown()),
    movements: z.array(z.unknown()),
    transfersOut: z.array(z.unknown()),
    transfersIn: z.array(z.unknown()),
    sales: z.array(z.unknown()),
    saleReturns: z.array(z.unknown())
}).strict();

export type WarehouseResultType = z.infer<typeof WarehouseResultSchema>;
