import * as z from 'zod';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    productName: z.string(),
    productFeatures: z.array(z.string()),
    productDescription: z.string(),
    productImages: z.array(z.string()),
    productCadDrawing: z.array(z.string()),
    productCatalogue: z.array(z.string()),
    productVideos: z.array(z.string()),
    childCategoryId: z.string(),
    tags: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    brandId: z.string().optional().nullable(),
    brand: z.unknown().optional().nullable(),
    childCategory: z.unknown(),
    productVariants: z.array(z.unknown())
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
