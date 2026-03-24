import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentCreateManyCreatedByUserInputObjectSchema as ClientPaymentCreateManyCreatedByUserInputObjectSchema } from './ClientPaymentCreateManyCreatedByUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientPaymentCreateManyCreatedByUserInputObjectSchema), z.lazy(() => ClientPaymentCreateManyCreatedByUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientPaymentCreateManyCreatedByUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentCreateManyCreatedByUserInputEnvelope>;
export const ClientPaymentCreateManyCreatedByUserInputEnvelopeObjectZodSchema = makeSchema();
