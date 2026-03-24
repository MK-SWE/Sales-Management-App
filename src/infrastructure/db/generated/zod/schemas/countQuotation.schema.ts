import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationOrderByWithRelationInputObjectSchema as QuotationOrderByWithRelationInputObjectSchema } from './objects/QuotationOrderByWithRelationInput.schema';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './objects/QuotationWhereInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';
import { QuotationCountAggregateInputObjectSchema as QuotationCountAggregateInputObjectSchema } from './objects/QuotationCountAggregateInput.schema';

export const QuotationCountSchema: z.ZodType<Prisma.QuotationCountArgs> = z.object({ orderBy: z.union([QuotationOrderByWithRelationInputObjectSchema, QuotationOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationWhereInputObjectSchema.optional(), cursor: QuotationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuotationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.QuotationCountArgs>;

export const QuotationCountZodSchema = z.object({ orderBy: z.union([QuotationOrderByWithRelationInputObjectSchema, QuotationOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationWhereInputObjectSchema.optional(), cursor: QuotationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuotationCountAggregateInputObjectSchema ]).optional() }).strict();