import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateManyOriginalSaleInputObjectSchema as SaleReturnCreateManyOriginalSaleInputObjectSchema } from './SaleReturnCreateManyOriginalSaleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleReturnCreateManyOriginalSaleInputObjectSchema), z.lazy(() => SaleReturnCreateManyOriginalSaleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleReturnCreateManyOriginalSaleInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleReturnCreateManyOriginalSaleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateManyOriginalSaleInputEnvelope>;
export const SaleReturnCreateManyOriginalSaleInputEnvelopeObjectZodSchema = makeSchema();
