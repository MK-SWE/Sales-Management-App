import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentCreateManyClientInputObjectSchema as ClientPaymentCreateManyClientInputObjectSchema } from './ClientPaymentCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientPaymentCreateManyClientInputObjectSchema), z.lazy(() => ClientPaymentCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientPaymentCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientPaymentCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateManyClientInputEnvelope>;
export const ClientPaymentCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
