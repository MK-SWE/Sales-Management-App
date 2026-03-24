import * as z from 'zod';
// prettier-ignore
export const BrandInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    products: z.array(z.unknown())
}).strict();

export type BrandInputType = z.infer<typeof BrandInputSchema>;
