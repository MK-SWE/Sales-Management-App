import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTypeSchema } from '../enums/DocumentType.schema'

const makeSchema = () => z.object({
  set: DocumentTypeSchema.optional()
}).strict();
export const NullableEnumDocumentTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumDocumentTypeFieldUpdateOperationsInput>;
export const NullableEnumDocumentTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
