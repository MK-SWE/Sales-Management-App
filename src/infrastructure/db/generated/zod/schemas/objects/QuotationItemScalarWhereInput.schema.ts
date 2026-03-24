import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const quotationitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QuotationItemScalarWhereInputObjectSchema), z.lazy(() => QuotationItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuotationItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuotationItemScalarWhereInputObjectSchema), z.lazy(() => QuotationItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quotationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ProductVariantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  snapshotSKU: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  snapshotAttributes: z.lazy(() => JsonFilterObjectSchema).optional(),
  snapshotImages: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  snapshotProductName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  snapshotProductId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuotationItemScalarWhereInputObjectSchema: z.ZodType<Prisma.QuotationItemScalarWhereInput> = quotationitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.QuotationItemScalarWhereInput>;
export const QuotationItemScalarWhereInputObjectZodSchema = quotationitemscalarwhereinputSchema;
