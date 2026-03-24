import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleOrderByWithRelationInputObjectSchema as SaleOrderByWithRelationInputObjectSchema } from './objects/SaleOrderByWithRelationInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleCountAggregateInputObjectSchema as SaleCountAggregateInputObjectSchema } from './objects/SaleCountAggregateInput.schema';
import { SaleMinAggregateInputObjectSchema as SaleMinAggregateInputObjectSchema } from './objects/SaleMinAggregateInput.schema';
import { SaleMaxAggregateInputObjectSchema as SaleMaxAggregateInputObjectSchema } from './objects/SaleMaxAggregateInput.schema';
import { SaleAvgAggregateInputObjectSchema as SaleAvgAggregateInputObjectSchema } from './objects/SaleAvgAggregateInput.schema';
import { SaleSumAggregateInputObjectSchema as SaleSumAggregateInputObjectSchema } from './objects/SaleSumAggregateInput.schema';

export const SaleAggregateSchema: z.ZodType<Prisma.SaleAggregateArgs> = z.object({ orderBy: z.union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleWhereInputObjectSchema.optional(), cursor: SaleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SaleCountAggregateInputObjectSchema ]).optional(), _min: SaleMinAggregateInputObjectSchema.optional(), _max: SaleMaxAggregateInputObjectSchema.optional(), _avg: SaleAvgAggregateInputObjectSchema.optional(), _sum: SaleSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleAggregateArgs>;

export const SaleAggregateZodSchema = z.object({ orderBy: z.union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleWhereInputObjectSchema.optional(), cursor: SaleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SaleCountAggregateInputObjectSchema ]).optional(), _min: SaleMinAggregateInputObjectSchema.optional(), _max: SaleMaxAggregateInputObjectSchema.optional(), _avg: SaleAvgAggregateInputObjectSchema.optional(), _sum: SaleSumAggregateInputObjectSchema.optional() }).strict();