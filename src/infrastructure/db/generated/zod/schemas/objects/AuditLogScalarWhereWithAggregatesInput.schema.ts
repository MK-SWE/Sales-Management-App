import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const auditlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  entityName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  entityId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  changes: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AuditLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AuditLogScalarWhereWithAggregatesInput> = auditlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AuditLogScalarWhereWithAggregatesInput>;
export const AuditLogScalarWhereWithAggregatesInputObjectZodSchema = auditlogscalarwherewithaggregatesinputSchema;
