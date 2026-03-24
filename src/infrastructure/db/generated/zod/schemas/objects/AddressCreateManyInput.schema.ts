import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  label: z.string().optional().nullable(),
  address_line1: z.string(),
  address_line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  is_default: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AddressCreateManyInputObjectSchema: z.ZodType<Prisma.AddressCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateManyInput>;
export const AddressCreateManyInputObjectZodSchema = makeSchema();
