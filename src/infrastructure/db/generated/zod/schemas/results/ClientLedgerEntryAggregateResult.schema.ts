import * as z from 'zod';
export const ClientLedgerEntryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    clientId: z.number(),
    type: z.number(),
    amount: z.number(),
    balanceAfter: z.number(),
    referenceId: z.number(),
    referenceType: z.number(),
    createdByUserId: z.number(),
    happenedAt: z.number(),
    createdAt: z.number(),
    client: z.number(),
    createdByUser: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable(),
    balanceAfter: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable(),
    balanceAfter: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    clientId: z.string().nullable(),
    amount: z.number().nullable(),
    balanceAfter: z.number().nullable(),
    referenceId: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    happenedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    clientId: z.string().nullable(),
    amount: z.number().nullable(),
    balanceAfter: z.number().nullable(),
    referenceId: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    happenedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});