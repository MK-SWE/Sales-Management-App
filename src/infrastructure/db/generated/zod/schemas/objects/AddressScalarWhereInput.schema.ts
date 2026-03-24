import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const addressscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressScalarWhereInputObjectSchema), z.lazy(() => AddressScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressScalarWhereInputObjectSchema), z.lazy(() => AddressScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  address_line1: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  address_line2: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  postal_code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  is_default: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AddressScalarWhereInputObjectSchema: z.ZodType<Prisma.AddressScalarWhereInput> = addressscalarwhereinputSchema as unknown as z.ZodType<Prisma.AddressScalarWhereInput>;
export const AddressScalarWhereInputObjectZodSchema = addressscalarwhereinputSchema;
