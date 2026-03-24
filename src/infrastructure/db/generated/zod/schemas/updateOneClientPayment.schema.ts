import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './objects/ClientPaymentSelect.schema';
import { ClientPaymentIncludeObjectSchema as ClientPaymentIncludeObjectSchema } from './objects/ClientPaymentInclude.schema';
import { ClientPaymentUpdateInputObjectSchema as ClientPaymentUpdateInputObjectSchema } from './objects/ClientPaymentUpdateInput.schema';
import { ClientPaymentUncheckedUpdateInputObjectSchema as ClientPaymentUncheckedUpdateInputObjectSchema } from './objects/ClientPaymentUncheckedUpdateInput.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './objects/ClientPaymentWhereUniqueInput.schema';

export const ClientPaymentUpdateOneSchema: z.ZodType<Prisma.ClientPaymentUpdateArgs> = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), data: z.union([ClientPaymentUpdateInputObjectSchema, ClientPaymentUncheckedUpdateInputObjectSchema]), where: ClientPaymentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientPaymentUpdateArgs>;

export const ClientPaymentUpdateOneZodSchema = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), data: z.union([ClientPaymentUpdateInputObjectSchema, ClientPaymentUncheckedUpdateInputObjectSchema]), where: ClientPaymentWhereUniqueInputObjectSchema }).strict();