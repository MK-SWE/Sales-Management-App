import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTypeSchema } from '../enums/DocumentType.schema'

const nestedenumdocumenttypenullablefilterSchema = z.object({
  equals: DocumentTypeSchema.optional().nullable(),
  in: DocumentTypeSchema.array().optional().nullable(),
  notIn: DocumentTypeSchema.array().optional().nullable(),
  not: z.union([DocumentTypeSchema, z.lazy(() => NestedEnumDocumentTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumDocumentTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumDocumentTypeNullableFilter> = nestedenumdocumenttypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumDocumentTypeNullableFilter>;
export const NestedEnumDocumentTypeNullableFilterObjectZodSchema = nestedenumdocumenttypenullablefilterSchema;
