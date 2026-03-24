import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './objects/ClientPaymentSelect.schema';
import { ClientPaymentIncludeObjectSchema as ClientPaymentIncludeObjectSchema } from './objects/ClientPaymentInclude.schema';
import { ClientPaymentCreateInputObjectSchema as ClientPaymentCreateInputObjectSchema } from './objects/ClientPaymentCreateInput.schema';
import { ClientPaymentUncheckedCreateInputObjectSchema as ClientPaymentUncheckedCreateInputObjectSchema } from './objects/ClientPaymentUncheckedCreateInput.schema';

export const ClientPaymentCreateOneSchema: z.ZodType<Prisma.ClientPaymentCreateArgs> = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), data: z.union([ClientPaymentCreateInputObjectSchema, ClientPaymentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ClientPaymentCreateArgs>;

export const ClientPaymentCreateOneZodSchema = z.object({ select: ClientPaymentSelectObjectSchema.optional(), include: ClientPaymentIncludeObjectSchema.optional(), data: z.union([ClientPaymentCreateInputObjectSchema, ClientPaymentUncheckedCreateInputObjectSchema]) }).strict();