import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleItemCreateManySaleInputObjectSchema as SaleItemCreateManySaleInputObjectSchema } from './SaleItemCreateManySaleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleItemCreateManySaleInputObjectSchema), z.lazy(() => SaleItemCreateManySaleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleItemCreateManySaleInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleItemCreateManySaleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemCreateManySaleInputEnvelope>;
export const SaleItemCreateManySaleInputEnvelopeObjectZodSchema = makeSchema();
