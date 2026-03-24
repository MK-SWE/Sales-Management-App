import * as z from 'zod';
export const OrderAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    quotationId: z.number(),
    quotation: z.number(),
    status: z.number(),
    items: z.number(),
    totalAmount: z.number(),
    shippingAddressId: z.number(),
    shippingAddress: z.number(),
    snapshotAddress: z.number(),
    notes: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    totalAmount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    totalAmount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    quotationId: z.string().nullable(),
    totalAmount: z.number().nullable(),
    shippingAddressId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    quotationId: z.string().nullable(),
    totalAmount: z.number().nullable(),
    shippingAddressId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});