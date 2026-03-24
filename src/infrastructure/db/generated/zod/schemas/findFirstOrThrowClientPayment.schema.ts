import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentIncludeObjectSchema as ClientPaymentIncludeObjectSchema } from './objects/ClientPaymentInclude.schema';
import { ClientPaymentOrderByWithRelationInputObjectSchema as ClientPaymentOrderByWithRelationInputObjectSchema } from './objects/ClientPaymentOrderByWithRelationInput.schema';
import { ClientPaymentWhereInputObjectSchema as ClientPaymentWhereInputObjectSchema } from './objects/ClientPaymentWhereInput.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './objects/ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentScalarFieldEnumSchema } from './enums/ClientPaymentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClientPaymentFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ClientPaymentSelect> = z.object({
    id: z.boolean().optional(),
    paymentNumber: z.boolean().optional(),
    clientId: z.boolean().optional(),
    amount: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClientPaymentSelect>;

export const ClientPaymentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    paymentNumber: z.boolean().optional(),
    clientId: z.boolean().optional(),
    amount: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional()
  }).strict();

export const ClientPaymentFindFirstOrThrowSchema: z.ZodType<Prisma.ClientPaymentFindFirstOrThrowArgs> = z.object({ select: ClientPaymentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClientPaymentIncludeObjectSchema.optional()), orderBy: z.union([ClientPaymentOrderByWithRelationInputObjectSchema, ClientPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientPaymentWhereInputObjectSchema.optional(), cursor: ClientPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientPaymentScalarFieldEnumSchema, ClientPaymentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientPaymentFindFirstOrThrowArgs>;

export const ClientPaymentFindFirstOrThrowZodSchema = z.object({ select: ClientPaymentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClientPaymentIncludeObjectSchema.optional()), orderBy: z.union([ClientPaymentOrderByWithRelationInputObjectSchema, ClientPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientPaymentWhereInputObjectSchema.optional(), cursor: ClientPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientPaymentScalarFieldEnumSchema, ClientPaymentScalarFieldEnumSchema.array()]).optional() }).strict();