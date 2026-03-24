import * as z from 'zod';
export const CategoryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  categoryName: z.string(),
  parentCategoryId: z.string().optional(),
  tags: z.array(z.string()),
  parentCategory: z.unknown().optional(),
  children: z.array(z.unknown()),
  childCategoryProducts: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});