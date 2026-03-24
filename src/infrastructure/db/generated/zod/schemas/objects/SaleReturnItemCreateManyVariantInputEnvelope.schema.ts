import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemCreateManyVariantInputObjectSchema as SaleReturnItemCreateManyVariantInputObjectSchema } from './SaleReturnItemCreateManyVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleReturnItemCreateManyVariantInputObjectSchema), z.lazy(() => SaleReturnItemCreateManyVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleReturnItemCreateManyVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateManyVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateManyVariantInputEnvelope>;
export const SaleReturnItemCreateManyVariantInputEnvelopeObjectZodSchema = makeSchema();
