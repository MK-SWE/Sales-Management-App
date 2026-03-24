import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereInputObjectSchema as ClientPaymentWhereInputObjectSchema } from './ClientPaymentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientPaymentWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountPaymentsArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountPaymentsArgsObjectZodSchema = makeSchema();
