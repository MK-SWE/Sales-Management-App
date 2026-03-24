import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCreateManyUserInputObjectSchema as QuotationCreateManyUserInputObjectSchema } from './QuotationCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QuotationCreateManyUserInputObjectSchema), z.lazy(() => QuotationCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const QuotationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.QuotationCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCreateManyUserInputEnvelope>;
export const QuotationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
