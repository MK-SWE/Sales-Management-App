import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumQuotationStatusWithAggregatesFilterObjectSchema as EnumQuotationStatusWithAggregatesFilterObjectSchema } from './EnumQuotationStatusWithAggregatesFilter.schema';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const quotationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => QuotationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuotationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuotationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuotationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuotationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumQuotationStatusWithAggregatesFilterObjectSchema), QuotationStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuotationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.QuotationScalarWhereWithAggregatesInput> = quotationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.QuotationScalarWhereWithAggregatesInput>;
export const QuotationScalarWhereWithAggregatesInputObjectZodSchema = quotationscalarwherewithaggregatesinputSchema;
