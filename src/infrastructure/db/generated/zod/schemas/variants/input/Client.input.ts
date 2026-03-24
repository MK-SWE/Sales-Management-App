import * as z from 'zod';
// prettier-ignore
export const ClientInputSchema = z.object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    isOpenAccountEnabled: z.boolean(),
    isBlocked: z.boolean(),
    creditLimit: z.number().optional().nullable(),
    currentBalance: z.number(),
    contactInfo: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ledgerEntries: z.array(z.unknown()),
    payments: z.array(z.unknown()),
    sales: z.array(z.unknown()),
    saleReturns: z.array(z.unknown())
}).strict();

export type ClientInputType = z.infer<typeof ClientInputSchema>;
