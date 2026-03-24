import * as z from 'zod';
export const ClientAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    code: z.number(),
    name: z.number(),
    isOpenAccountEnabled: z.number(),
    isBlocked: z.number(),
    creditLimit: z.number(),
    currentBalance: z.number(),
    contactInfo: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    ledgerEntries: z.number(),
    payments: z.number(),
    sales: z.number(),
    saleReturns: z.number()
  }).optional(),
  _sum: z.object({
    creditLimit: z.number().nullable(),
    currentBalance: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    creditLimit: z.number().nullable(),
    currentBalance: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    creditLimit: z.number().nullable(),
    currentBalance: z.number().nullable(),
    contactInfo: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    creditLimit: z.number().nullable(),
    currentBalance: z.number().nullable(),
    contactInfo: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});