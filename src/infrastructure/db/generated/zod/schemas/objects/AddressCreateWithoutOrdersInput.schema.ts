import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutAddressesInputObjectSchema as UserCreateNestedOneWithoutAddressesInputObjectSchema } from './UserCreateNestedOneWithoutAddressesInput.schema'

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
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAddressesInputObjectSchema)
}).strict();
export const AddressCreateWithoutOrdersInputObjectSchema: z.ZodType<Prisma.AddressCreateWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateWithoutOrdersInput>;
export const AddressCreateWithoutOrdersInputObjectZodSchema = makeSchema();
