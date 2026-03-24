import * as z from 'zod';
// prettier-ignore
export const CategoryInputSchema = z.object({
    id: z.string(),
    categoryName: z.string(),
    parentCategoryId: z.string().optional().nullable(),
    tags: z.array(z.string()),
    parentCategory: z.unknown().optional().nullable(),
    children: z.array(z.unknown()),
    childCategoryProducts: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CategoryInputType = z.infer<typeof CategoryInputSchema>;
