import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationItemCreateManyQuotationInputObjectSchema as QuotationItemCreateManyQuotationInputObjectSchema } from './QuotationItemCreateManyQuotationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QuotationItemCreateManyQuotationInputObjectSchema), z.lazy(() => QuotationItemCreateManyQuotationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const QuotationItemCreateManyQuotationInputEnvelopeObjectSchema: z.ZodType<Prisma.QuotationItemCreateManyQuotationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemCreateManyQuotationInputEnvelope>;
export const QuotationItemCreateManyQuotationInputEnvelopeObjectZodSchema = makeSchema();
