import * as z from 'zod';
export const QuotationItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    quotationId: z.number(),
    quotation: z.number(),
    ProductVariantId: z.number(),
    ProductVariant: z.number(),
    quantity: z.number(),
    notes: z.number(),
    snapshotSKU: z.number(),
    snapshotAttributes: z.number(),
    snapshotImages: z.number(),
    snapshotProductName: z.number(),
    snapshotProductId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    quotationId: z.string().nullable(),
    ProductVariantId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    notes: z.string().nullable(),
    snapshotSKU: z.string().nullable(),
    snapshotImages: z.array(z.string()).nullable(),
    snapshotProductName: z.string().nullable(),
    snapshotProductId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    quotationId: z.string().nullable(),
    ProductVariantId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    notes: z.string().nullable(),
    snapshotSKU: z.string().nullable(),
    snapshotImages: z.array(z.string()).nullable(),
    snapshotProductName: z.string().nullable(),
    snapshotProductId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});