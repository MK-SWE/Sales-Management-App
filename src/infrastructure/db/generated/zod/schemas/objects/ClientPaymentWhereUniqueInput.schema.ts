import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  paymentNumber: z.string().optional()
}).strict();
export const ClientPaymentWhereUniqueInputObjectSchema: z.ZodType<Prisma.ClientPaymentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentWhereUniqueInput>;
export const ClientPaymentWhereUniqueInputObjectZodSchema = makeSchema();
