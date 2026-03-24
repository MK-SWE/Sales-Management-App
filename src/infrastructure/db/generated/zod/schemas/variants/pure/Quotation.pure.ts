import * as z from 'zod';
import { QuotationStatusSchema } from '../../enums/QuotationStatus.schema';
// prettier-ignore
export const QuotationModelSchema = z.object({
    id: z.string(),
    userId: z.string().nullable(),
    user: z.unknown().nullable(),
    status: QuotationStatusSchema,
    notes: z.string().nullable(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    orders: z.unknown().nullable()
}).strict();

export type QuotationPureType = z.infer<typeof QuotationModelSchema>;
