import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCreateManyCreatedByUserInputObjectSchema as SaleCreateManyCreatedByUserInputObjectSchema } from './SaleCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaleCreateManyCreatedByUserInputObjectSchema), z.lazy(() => SaleCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaleCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SaleCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateManyCreatedByUserInputEnvelope>;
export const SaleCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
