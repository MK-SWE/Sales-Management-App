import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentUpdateManyMutationInputObjectSchema as ClientPaymentUpdateManyMutationInputObjectSchema } from './objects/ClientPaymentUpdateManyMutationInput.schema';
import { ClientPaymentWhereInputObjectSchema as ClientPaymentWhereInputObjectSchema } from './objects/ClientPaymentWhereInput.schema';

export const ClientPaymentUpdateManySchema: z.ZodType<Prisma.ClientPaymentUpdateManyArgs> = z.object({ data: ClientPaymentUpdateManyMutationInputObjectSchema, where: ClientPaymentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientPaymentUpdateManyArgs>;

export const ClientPaymentUpdateManyZodSchema = z.object({ data: ClientPaymentUpdateManyMutationInputObjectSchema, where: ClientPaymentWhereInputObjectSchema.optional() }).strict();