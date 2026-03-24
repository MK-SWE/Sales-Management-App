import * as z from 'zod';
// prettier-ignore
export const ClientPaymentModelSchema = z.object({
    id: z.string(),
    paymentNumber: z.string(),
    clientId: z.string(),
    amount: z.number(),
    paymentDate: z.date(),
    notes: z.string().nullable(),
    createdByUserId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    client: z.unknown(),
    createdByUser: z.unknown().nullable()
}).strict();

export type ClientPaymentPureType = z.infer<typeof ClientPaymentModelSchema>;
