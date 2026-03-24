import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientPaymentWhereInputObjectSchema as ClientPaymentWhereInputObjectSchema } from './ClientPaymentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ClientPaymentWhereInputObjectSchema).optional(),
  some: z.lazy(() => ClientPaymentWhereInputObjectSchema).optional(),
  none: z.lazy(() => ClientPaymentWhereInputObjectSchema).optional()
}).strict();
export const ClientPaymentListRelationFilterObjectSchema: z.ZodType<Prisma.ClientPaymentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentListRelationFilter>;
export const ClientPaymentListRelationFilterObjectZodSchema = makeSchema();
