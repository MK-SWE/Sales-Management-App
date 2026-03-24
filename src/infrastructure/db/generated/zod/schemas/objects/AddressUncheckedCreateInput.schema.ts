import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderUncheckedCreateNestedManyWithoutShippingAddressInputObjectSchema as OrderUncheckedCreateNestedManyWithoutShippingAddressInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutShippingAddressInput.schema'

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
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutShippingAddressInputObjectSchema).optional()
}).strict();
export const AddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateInput>;
export const AddressUncheckedCreateInputObjectZodSchema = makeSchema();
