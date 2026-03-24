import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientPaymentOrderByWithRelationInputObjectSchema as ClientPaymentOrderByWithRelationInputObjectSchema } from './objects/ClientPaymentOrderByWithRelationInput.schema';
import { ClientPaymentWhereInputObjectSchema as ClientPaymentWhereInputObjectSchema } from './objects/ClientPaymentWhereInput.schema';
import { ClientPaymentWhereUniqueInputObjectSchema as ClientPaymentWhereUniqueInputObjectSchema } from './objects/ClientPaymentWhereUniqueInput.schema';
import { ClientPaymentCountAggregateInputObjectSchema as ClientPaymentCountAggregateInputObjectSchema } from './objects/ClientPaymentCountAggregateInput.schema';

export const ClientPaymentCountSchema: z.ZodType<Prisma.ClientPaymentCountArgs> = z.object({ orderBy: z.union([ClientPaymentOrderByWithRelationInputObjectSchema, ClientPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientPaymentWhereInputObjectSchema.optional(), cursor: ClientPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientPaymentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientPaymentCountArgs>;

export const ClientPaymentCountZodSchema = z.object({ orderBy: z.union([ClientPaymentOrderByWithRelationInputObjectSchema, ClientPaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientPaymentWhereInputObjectSchema.optional(), cursor: ClientPaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientPaymentCountAggregateInputObjectSchema ]).optional() }).strict();