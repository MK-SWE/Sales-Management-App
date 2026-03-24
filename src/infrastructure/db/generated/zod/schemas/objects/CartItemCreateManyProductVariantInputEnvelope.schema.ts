import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemCreateManyProductVariantInputObjectSchema as CartItemCreateManyProductVariantInputObjectSchema } from './CartItemCreateManyProductVariantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CartItemCreateManyProductVariantInputObjectSchema), z.lazy(() => CartItemCreateManyProductVariantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CartItemCreateManyProductVariantInputEnvelopeObjectSchema: z.ZodType<Prisma.CartItemCreateManyProductVariantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCreateManyProductVariantInputEnvelope>;
export const CartItemCreateManyProductVariantInputEnvelopeObjectZodSchema = makeSchema();
