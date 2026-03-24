import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const brandscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BrandScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BrandScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BrandScalarWhereWithAggregatesInput> = brandscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BrandScalarWhereWithAggregatesInput>;
export const BrandScalarWhereWithAggregatesInputObjectZodSchema = brandscalarwherewithaggregatesinputSchema;
