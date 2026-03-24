import * as z from 'zod';
export const AddressDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  label: z.string().optional(),
  address_line1: z.string(),
  address_line2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  is_default: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  orders: z.array(z.unknown())
}));