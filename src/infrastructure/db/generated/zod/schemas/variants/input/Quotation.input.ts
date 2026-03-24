import * as z from 'zod';
import { QuotationStatusSchema } from '../../enums/QuotationStatus.schema';
// prettier-ignore
export const QuotationInputSchema = z.object({
    id: z.string(),
    userId: z.string().optional().nullable(),
    user: z.unknown().optional().nullable(),
    status: QuotationStatusSchema,
    notes: z.string().optional().nullable(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    orders: z.unknown().optional().nullable()
}).strict();

export type QuotationInputType = z.infer<typeof QuotationInputSchema>;
