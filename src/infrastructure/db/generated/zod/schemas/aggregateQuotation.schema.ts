import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { QuotationOrderByWithRelationInputObjectSchema as QuotationOrderByWithRelationInputObjectSchema } from './objects/QuotationOrderByWithRelationInput.schema';
import { QuotationWhereInputObjectSchema as QuotationWhereInputObjectSchema } from './objects/QuotationWhereInput.schema';
import { QuotationWhereUniqueInputObjectSchema as QuotationWhereUniqueInputObjectSchema } from './objects/QuotationWhereUniqueInput.schema';
import { QuotationCountAggregateInputObjectSchema as QuotationCountAggregateInputObjectSchema } from './objects/QuotationCountAggregateInput.schema';
import { QuotationMinAggregateInputObjectSchema as QuotationMinAggregateInputObjectSchema } from './objects/QuotationMinAggregateInput.schema';
import { QuotationMaxAggregateInputObjectSchema as QuotationMaxAggregateInputObjectSchema } from './objects/QuotationMaxAggregateInput.schema';

export const QuotationAggregateSchema: z.ZodType<Prisma.QuotationAggregateArgs> = z.object({ orderBy: z.union([QuotationOrderByWithRelationInputObjectSchema, QuotationOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationWhereInputObjectSchema.optional(), cursor: QuotationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QuotationCountAggregateInputObjectSchema ]).optional(), _min: QuotationMinAggregateInputObjectSchema.optional(), _max: QuotationMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuotationAggregateArgs>;

export const QuotationAggregateZodSchema = z.object({ orderBy: z.union([QuotationOrderByWithRelationInputObjectSchema, QuotationOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuotationWhereInputObjectSchema.optional(), cursor: QuotationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), QuotationCountAggregateInputObjectSchema ]).optional(), _min: QuotationMinAggregateInputObjectSchema.optional(), _max: QuotationMaxAggregateInputObjectSchema.optional() }).strict();