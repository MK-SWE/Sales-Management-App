import * as z from 'zod';
// prettier-ignore
export const AddressInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    label: z.string().optional().nullable(),
    address_line1: z.string(),
    address_line2: z.string().optional().nullable(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postal_code: z.string(),
    is_default: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    orders: z.array(z.unknown())
}).strict();

export type AddressInputType = z.infer<typeof AddressInputSchema>;
