import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderCreateManyShippingAddressInputObjectSchema as OrderCreateManyShippingAddressInputObjectSchema } from './OrderCreateManyShippingAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrderCreateManyShippingAddressInputObjectSchema), z.lazy(() => OrderCreateManyShippingAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrderCreateManyShippingAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.OrderCreateManyShippingAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyShippingAddressInputEnvelope>;
export const OrderCreateManyShippingAddressInputEnvelopeObjectZodSchema = makeSchema();
