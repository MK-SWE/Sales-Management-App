import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './objects/ClientPaymentSelect.schema';
import { ClientPaymentIncludeObjectSchema as ClientPaymentIncludeObjectSchema } from './objects/ClientPaymentInclude.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './objects/ClientPaymentWhereUniqueInput.schema';

export const ClientPaymentDeleteOneSchema: z.ZodType<Prisma.ClientPaymentDeleteArgs> = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), where: ClientPaymentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientPaymentDeleteArgs>;

export const ClientPaymentDeleteOneZodSchema = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), where: ClientPaymentWhereUniqueInputObjectSchema }).strict();