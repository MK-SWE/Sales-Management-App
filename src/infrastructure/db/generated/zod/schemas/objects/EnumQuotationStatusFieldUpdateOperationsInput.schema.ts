import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationStatusSchema } from '../enums/QuotationStatus.schema'

const makeSchema = () => z.object({
  set: QuotationStatusSchema.optional()
}).strict();
export const EnumQuotationStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumQuotationStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumQuotationStatusFieldUpdateOperationsInput>;
export const EnumQuotationStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
