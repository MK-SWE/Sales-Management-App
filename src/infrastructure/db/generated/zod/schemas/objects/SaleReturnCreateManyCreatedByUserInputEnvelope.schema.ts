import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateManyCreatedByUserInputObjectSchema as SaleReturnCreateManyCreatedByUserInputObjectSchema } from './SaleReturnCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleReturnCreateManyCreatedByUserInputObjectSchema), z.lazy(() => SaleReturnCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleReturnCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleReturnCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateManyCreatedByUserInputEnvelope>;
export const SaleReturnCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
