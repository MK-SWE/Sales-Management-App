import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTypeSchema } from '../enums/DocumentType.schema';
import { NestedEnumDocumentTypeNullableFilterObjectSchema as NestedEnumDocumentTypeNullableFilterObjectSchema } from './NestedEnumDocumentTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: DocumentTypeSchema.optional().nullable(),
  in: DocumentTypeSchema.array().optional().nullable(),
  notIn: DocumentTypeSchema.array().optional().nullable(),
  not: z.union([DocumentTypeSchema, z.lazy(() => NestedEnumDocumentTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumDocumentTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumDocumentTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDocumentTypeNullableFilter>;
export const EnumDocumentTypeNullableFilterObjectZodSchema = makeSchema();
