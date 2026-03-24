import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationItemOrderByWithRelationInputObjectSchema as QuotationItemOrderByWithRelationInputObjectSchema } from './objects/QuotationItemOrderByWithRelationInput.schema';
import { QuotationItemWhereInputObjectSchema as QuotationItemWhereInputObjectSchema } from './objects/QuotationItemWhereInput.schema';
import { QuotationItemWhereUniqueInputObjectSchema as QuotationItemWhereUniqueInputObjectSchema } from './objects/QuotationItemWhereUniqueInput.schema';
import { QuotationItemCountAggregateInputObjectSchema as QuotationItemCountAggregateInputObjectSchema } from './objects/QuotationItemCountAggregateInput.schema';

export const QuotationItemCountSchema: z.ZodType<Prisma.QuotationItemCountArgs> = z.object({ orderBy: z.union([QuotationItemOrderByWithRelationInputObjectSchema, QuotationItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationItemWhereInputObjectSchema.optional(), cursor: QuotationItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuotationItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.QuotationItemCountArgs>;

export const QuotationItemCountZodSchema = z.object({ orderBy: z.union([QuotationItemOrderByWithRelationInputObjectSchema, QuotationItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationItemWhereInputObjectSchema.optional(), cursor: QuotationItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuotationItemCountAggregateInputObjectSchema ]).optional() }).strict();