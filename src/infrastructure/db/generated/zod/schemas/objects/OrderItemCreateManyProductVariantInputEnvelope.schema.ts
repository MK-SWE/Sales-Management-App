import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemCreateManyProductVariantInputObjectSchema as OrderItemCreateManyProductVariantInputObjectSchema } from './OrderItemCreateManyProductVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrderItemCreateManyProductVariantInputObjectSchema), z.lazy(() => OrderItemCreateManyProductVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrderItemCreateManyProductVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderItemCreateManyProductVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyProductVariantInputEnvelope>;
export const OrderItemCreateManyProductVariantInputEnvelopeObjectZodSchema = makeSchema();
