import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentWhereInputObjectSchema as ClientPaymentWhereInputObjectSchema } from './objects/ClientPaymentWhereInput.schema';

export const ClientPaymentDeleteManySchema: z.ZodType<Prisma.ClientPaymentDeleteManyArgs> = z.object({ where: ClientPaymentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientPaymentDeleteManyArgs>;

export const ClientPaymentDeleteManyZodSchema = z.object({ where: ClientPaymentWhereInputObjectSchema.optional() }).strict();