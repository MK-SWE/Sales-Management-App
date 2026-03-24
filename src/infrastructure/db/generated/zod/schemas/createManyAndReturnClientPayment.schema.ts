import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentSelectObjectSchema as ClientPaymentSelectObjectSchema } from './objects/ClientPaymentSelect.schema';
import { ClientPaymentCreateManyInputObjectSchema as ClientPaymentCreateManyInputObjectSchema } from './objects/ClientPaymentCreateManyInput.schema';

export const ClientPaymentCreateManyAndReturnSchema: z.ZodType<Prisma.ClientPaymentCreateManyAndReturnArgs> = z.object({ select: ClientPaymentSelectObjectSchema.optional(), data: z.union([ ClientPaymentCreateManyInputObjectSchema, z.array(ClientPaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientPaymentCreateManyAndReturnArgs>;

export const ClientPaymentCreateManyAndReturnZodSchema = z.object({ select: ClientPaymentSelectObjectSchema.optional(), data: z.union([ ClientPaymentCreateManyInputObjectSchema, z.array(ClientPaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();