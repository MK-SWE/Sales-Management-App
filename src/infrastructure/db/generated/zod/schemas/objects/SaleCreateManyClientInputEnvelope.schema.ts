import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateManyClientInputObjectSchema as SaleCreateManyClientInputObjectSchema } from './SaleCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleCreateManyClientInputObjectSchema), z.lazy(() => SaleCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateManyClientInputEnvelope>;
export const SaleCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
