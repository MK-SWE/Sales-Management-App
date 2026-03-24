import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './objects/ClientPaymentSelect.schema';
import { ClientPaymentUpdateManyMutationInputObjectSchema as ClientPaymentUpdateManyMutationInputObjectSchema } from './objects/ClientPaymentUpdateManyMutationInput.schema';
import { ClientPaymentWhereInputObjectSchema as ClientPaymentWhereInputObjectSchema } from './objects/ClientPaymentWhereInput.schema';

export const ClientPaymentUpdateManyAndReturnSchema: z.ZodType<Prisma.ClientPaymentUpdateManyAndReturnArgs> = z.object({ select: ClientPaymentSelectObjectSchema.optional(), data: ClientPaymentUpdateManyMutationInputObjectSchema, where: ClientPaymentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientPaymentUpdateManyAndReturnArgs>;

export const ClientPaymentUpdateManyAndReturnZodSchema = z.object({ select: ClientPaymentSelectObjectSchema.optional(), data: ClientPaymentUpdateManyMutationInputObjectSchema, where: ClientPaymentWhereInputObjectSchema.optional() }).strict();