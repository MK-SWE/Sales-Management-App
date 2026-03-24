import * as z from 'zod';
export const ClientPaymentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  paymentNumber: z.string(),
  clientId: z.string(),
  amount: z.number(),
  paymentDate: z.date(),
  notes: z.string(),
  createdByUserId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    paymentNumber: z.number(),
    clientId: z.number(),
    amount: z.number(),
    paymentDate: z.number(),
    notes: z.number(),
    createdByUserId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    client: z.number(),
    createdByUser: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    paymentNumber: z.string().nullable(),
    clientId: z.string().nullable(),
    amount: z.number().nullable(),
    paymentDate: z.date().nullable(),
    notes: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    paymentNumber: z.string().nullable(),
    clientId: z.string().nullable(),
    amount: z.number().nullable(),
    paymentDate: z.date().nullable(),
    notes: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));