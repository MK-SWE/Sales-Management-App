import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumQuotationStatusFilterObjectSchema as EnumQuotationStatusFilterObjectSchema } from './EnumQuotationStatusFilter.schema';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const quotationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QuotationScalarWhereInputObjectSchema), z.lazy(() => QuotationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuotationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuotationScalarWhereInputObjectSchema), z.lazy(() => QuotationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumQuotationStatusFilterObjectSchema), QuotationStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuotationScalarWhereInputObjectSchema: z.ZodType<Prisma.QuotationScalarWhereInput> = quotationscalarwhereinputSchema as unknown as z.ZodType<Prisma.QuotationScalarWhereInput>;
export const QuotationScalarWhereInputObjectZodSchema = quotationscalarwhereinputSchema;
