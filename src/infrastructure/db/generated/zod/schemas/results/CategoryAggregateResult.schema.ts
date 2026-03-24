import * as z from 'zod';
export const CategoryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    categoryName: z.number(),
    parentCategoryId: z.number(),
    tags: z.number(),
    parentCategory: z.number(),
    children: z.number(),
    childCategoryProducts: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    categoryName: z.string().nullable(),
    parentCategoryId: z.string().nullable(),
    tags: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    categoryName: z.string().nullable(),
    parentCategoryId: z.string().nullable(),
    tags: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});