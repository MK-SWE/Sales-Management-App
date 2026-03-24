import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutAddressesInputObjectSchema as UserCreateNestedOneWithoutAddressesInputObjectSchema } from './UserCreateNestedOneWithoutAddressesInput.schema';
import { OrderCreateNestedManyWithoutShippingAddressInputObjectSchema as OrderCreateNestedManyWithoutShippingAddressInputObjectSchema } from './OrderCreateNestedManyWithoutShippingAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  label: z.string().optional().nullable(),
  address_line1: z.string(),
  address_line2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  is_default: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAddressesInputObjectSchema),
  orders: z.lazy(() => OrderCreateNestedManyWithoutShippingAddressInputObjectSchema).optional()
}).strict();
export const AddressCreateInputObjectSchema: z.ZodType<Prisma.AddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateInput>;
export const AddressCreateInputObjectZodSchema = makeSchema();
