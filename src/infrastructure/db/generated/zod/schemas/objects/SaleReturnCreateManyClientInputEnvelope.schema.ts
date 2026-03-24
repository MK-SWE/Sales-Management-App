import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCreateManyClientInputObjectSchema as SaleReturnCreateManyClientInputObjectSchema } from './SaleReturnCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleReturnCreateManyClientInputObjectSchema), z.lazy(() => SaleReturnCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleReturnCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleReturnCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateManyClientInputEnvelope>;
export const SaleReturnCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
