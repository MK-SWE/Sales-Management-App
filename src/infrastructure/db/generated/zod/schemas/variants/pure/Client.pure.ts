import * as z from 'zod';
// prettier-ignore
export const ClientModelSchema = z.object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    isOpenAccountEnabled: z.boolean(),
    isBlocked: z.boolean(),
    creditLimit: z.number().nullable(),
    currentBalance: z.number(),
    contactInfo: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    ledgerEntries: z.array(z.unknown()),
    payments: z.array(z.unknown()),
    sales: z.array(z.unknown()),
    saleReturns: z.array(z.unknown())
}).strict();

export type ClientPureType = z.infer<typeof ClientModelSchema>;
