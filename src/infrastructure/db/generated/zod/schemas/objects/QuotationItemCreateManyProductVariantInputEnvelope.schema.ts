import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemCreateManyProductVariantInputObjectSchema as QuotationItemCreateManyProductVariantInputObjectSchema } from './QuotationItemCreateManyProductVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QuotationItemCreateManyProductVariantInputObjectSchema), z.lazy(() => QuotationItemCreateManyProductVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const QuotationItemCreateManyProductVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.QuotationItemCreateManyProductVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemCreateManyProductVariantInputEnvelope>;
export const QuotationItemCreateManyProductVariantInputEnvelopeObjectZodSchema = makeSchema();
