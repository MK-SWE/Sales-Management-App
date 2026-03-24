import * as z from 'zod';
export const QuotationItemUpdateResultSchema = z.nullable(z.object({
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
}));