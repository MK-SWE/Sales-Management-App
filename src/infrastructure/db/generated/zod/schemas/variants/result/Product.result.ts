import * as z from 'zod';
// prettier-ignore
export const ProductResultSchema = z.object({
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
    brandId: z.string().nullable(),
    brand: z.unknown().nullable(),
    childCategory: z.unknown(),
    productVariants: z.array(z.unknown())
}).strict();

export type ProductResultType = z.infer<typeof ProductResultSchema>;
