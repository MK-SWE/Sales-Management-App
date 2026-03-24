import * as z from 'zod';
// prettier-ignore
export const BrandResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    products: z.array(z.unknown())
}).strict();

export type BrandResultType = z.infer<typeof BrandResultSchema>;
