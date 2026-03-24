import * as z from 'zod';
export const QuotationItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  quotationId: z.string(),
  quotation: z.unknown(),
  ProductVariantId: z.string(),
  ProductVariant: z.unknown(),
  quantity: z.number().int(),
  notes: z.string().optional(),
  snapshotSKU: z.string(),
  snapshotAttributes: z.unknown(),
  snapshotImages: z.array(z.string()),
  snapshotProductName: z.string(),
  snapshotProductId: z.string(),
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