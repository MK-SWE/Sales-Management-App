import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnItemCreateManySaleReturnInputObjectSchema as SaleReturnItemCreateManySaleReturnInputObjectSchema } from './SaleReturnItemCreateManySaleReturnInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleReturnItemCreateManySaleReturnInputObjectSchema), z.lazy(() => SaleReturnItemCreateManySaleReturnInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleReturnItemCreateManySaleReturnInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleReturnItemCreateManySaleReturnInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemCreateManySaleReturnInputEnvelope>;
export const SaleReturnItemCreateManySaleReturnInputEnvelopeObjectZodSchema = makeSchema();
