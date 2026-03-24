import * as z from 'zod';
// prettier-ignore
export const CategoryResultSchema = z.object({
    id: z.string(),
    categoryName: z.string(),
    parentCategoryId: z.string().nullable(),
    tags: z.array(z.string()),
    parentCategory: z.unknown().nullable(),
    children: z.array(z.unknown()),
    childCategoryProducts: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CategoryResultType = z.infer<typeof CategoryResultSchema>;
