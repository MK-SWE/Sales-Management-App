import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumQuotationStatusFilterObjectSchema as EnumQuotationStatusFilterObjectSchema } from './EnumQuotationStatusFilter.schema';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { QuotationItemListRelationFilterObjectSchema as QuotationItemListRelationFilterObjectSchema } from './QuotationItemListRelationFilter.schema';
import { OrderNullableScalarRelationFilterObjectSchema as OrderNullableScalarRelationFilterObjectSchema } from './OrderNullableScalarRelationFilter.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const quotationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QuotationWhereInputObjectSchema), z.lazy(() => QuotationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuotationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuotationWhereInputObjectSchema), z.lazy(() => QuotationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumQuotationStatusFilterObjectSchema), QuotationStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => QuotationItemListRelationFilterObjectSchema).optional(),
  orders: z.union([z.lazy(() => OrderNullableScalarRelationFilterObjectSchema), z.lazy(() => OrderWhereInputObjectSchema)]).optional()
}).strict();
export const QuotationWhereInputObjectSchema: z.ZodType<Prisma.QuotationWhereInput> = quotationwhereinputSchema as unknown as z.ZodType<Prisma.QuotationWhereInput>;
export const QuotationWhereInputObjectZodSchema = quotationwhereinputSchema;
