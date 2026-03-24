import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const quotationitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => QuotationItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuotationItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuotationItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuotationItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuotationItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quotationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ProductVariantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  snapshotSKU: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  snapshotAttributes: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  snapshotImages: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  snapshotProductName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  snapshotProductId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuotationItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.QuotationItemScalarWhereWithAggregatesInput> = quotationitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.QuotationItemScalarWhereWithAggregatesInput>;
export const QuotationItemScalarWhereWithAggregatesInputObjectZodSchema = quotationitemscalarwherewithaggregatesinputSchema;
