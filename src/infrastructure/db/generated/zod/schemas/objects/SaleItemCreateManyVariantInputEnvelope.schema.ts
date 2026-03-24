import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemCreateManyVariantInputObjectSchema as SaleItemCreateManyVariantInputObjectSchema } from './SaleItemCreateManyVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleItemCreateManyVariantInputObjectSchema), z.lazy(() => SaleItemCreateManyVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleItemCreateManyVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleItemCreateManyVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCreateManyVariantInputEnvelope>;
export const SaleItemCreateManyVariantInputEnvelopeObjectZodSchema = makeSchema();
