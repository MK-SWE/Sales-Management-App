import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './objects/ClientPaymentSelect.schema';
import { ClientPaymentIncludeObjectSchema as ClientPaymentIncludeObjectSchema } from './objects/ClientPaymentInclude.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './objects/ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentCreateInputObjectSchema as ClientPaymentCreateInputObjectSchema } from './objects/ClientPaymentCreateInput.schema';
import { ClientPaymentUncheckedCreateInputObjectSchema as ClientPaymentUncheckedCreateInputObjectSchema } from './objects/ClientPaymentUncheckedCreateInput.schema';
import { ClientPaymentUpdateInputObjectSchema as ClientPaymentUpdateInputObjectSchema } from './objects/ClientPaymentUpdateInput.schema';
import { ClientPaymentUncheckedUpdateInputObjectSchema as ClientPaymentUncheckedUpdateInputObjectSchema } from './objects/ClientPaymentUncheckedUpdateInput.schema';

export const ClientPaymentUpsertOneSchema: z.ZodType<Prisma.ClientPaymentUpsertArgs> = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), where: ClientPaymentWhereUniqueInputObjectSchema, create: z.union([ ClientPaymentCreateInputObjectSchema, ClientPaymentUncheckedCreateInputObjectSchema ]), update: z.union([ ClientPaymentUpdateInputObjectSchema, ClientPaymentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ClientPaymentUpsertArgs>;

export const ClientPaymentUpsertOneZodSchema = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), where: ClientPaymentWhereUniqueInputObjectSchema, create: z.union([ ClientPaymentCreateInputObjectSchema, ClientPaymentUncheckedCreateInputObjectSchema ]), update: z.union([ ClientPaymentUpdateInputObjectSchema, ClientPaymentUncheckedUpdateInputObjectSchema ]) }).strict();