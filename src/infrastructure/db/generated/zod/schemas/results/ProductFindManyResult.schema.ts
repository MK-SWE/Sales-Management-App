import * as z from 'zod';
export const ProductFindManyResultSchema = z.object({
  data: z.array(z.object({
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
  brandId: z.string().optional(),
  brand: z.unknown().optional(),
  childCategory: z.unknown(),
  productVariants: z.array(z.unknown())
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