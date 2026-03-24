import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { NestedEnumDocumentTypeNullableWithAggregatesFilterObjectSchema as NestedEnumDocumentTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumDocumentTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumDocumentTypeNullableFilterObjectSchema as NestedEnumDocumentTypeNullableFilterObjectSchema } from './NestedEnumDocumentTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: DocumentTypeSchema.optional().nullable(),
  in: DocumentTypeSchema.array().optional().nullable(),
  notIn: DocumentTypeSchema.array().optional().nullable(),
  not: z.union([DocumentTypeSchema, z.lazy(() => NestedEnumDocumentTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDocumentTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDocumentTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumDocumentTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDocumentTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDocumentTypeNullableWithAggregatesFilter>;
export const EnumDocumentTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
