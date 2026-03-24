import * as z from 'zod';
// prettier-ignore
export const ClientPaymentInputSchema = z.object({
    id: z.string(),
    paymentNumber: z.string(),
    clientId: z.string(),
    amount: z.number(),
    paymentDate: z.date(),
    notes: z.string().optional().nullable(),
    createdByUserId: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    client: z.unknown(),
    createdByUser: z.unknown().optional().nullable()
}).strict();

export type ClientPaymentInputType = z.infer<typeof ClientPaymentInputSchema>;
