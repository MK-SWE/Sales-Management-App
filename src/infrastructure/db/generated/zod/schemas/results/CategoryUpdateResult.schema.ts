import * as z from 'zod';
export const CategoryUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  categoryName: z.string(),
  parentCategoryId: z.string().optional(),
  tags: z.array(z.string()),
  parentCategory: z.unknown().optional(),
  children: z.array(z.unknown()),
  childCategoryProducts: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));