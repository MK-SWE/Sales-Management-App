import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentCreateManyInputObjectSchema as ClientPaymentCreateManyInputObjectSchema } from './objects/ClientPaymentCreateManyInput.schema';

export const ClientPaymentCreateManySchema: z.ZodType<Prisma.ClientPaymentCreateManyArgs> = z.object({ data: z.union([ ClientPaymentCreateManyInputObjectSchema, z.array(ClientPaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientPaymentCreateManyArgs>;

export const ClientPaymentCreateManyZodSchema = z.object({ data: z.union([ ClientPaymentCreateManyInputObjectSchema, z.array(ClientPaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();