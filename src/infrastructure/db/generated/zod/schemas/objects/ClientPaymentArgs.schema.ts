import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './ClientPaymentSelect.schema';
import { ClientPaymentIncludeObjectSchema as ClientPaymentIncludeObjectSchema } from './ClientPaymentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientPaymentSelectObjectSchema).optional(),
  include: z.lazy(() => ClientPaymentIncludeObjectSchema).optional()
}).strict();
export const ClientPaymentArgsObjectSchema = makeSchema();
export const ClientPaymentArgsObjectZodSchema = makeSchema();
