import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './objects/ClientPaymentSelect.schema';
import { ClientPaymentIncludeObjectSchema as ClientPaymentIncludeObjectSchema } from './objects/ClientPaymentInclude.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './objects/ClientPaymentWhereUniqueInput.schema';

export const ClientPaymentFindUniqueSchema: z.ZodType<Prisma.ClientPaymentFindUniqueArgs> = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), where: ClientPaymentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientPaymentFindUniqueArgs>;

export const ClientPaymentFindUniqueZodSchema = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), where: ClientPaymentWhereUniqueInputObjectSchema }).strict();