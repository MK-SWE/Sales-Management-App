import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleOrderByWithAggregationInputObjectSchema as SaleOrderByWithAggregationInputObjectSchema } from './objects/SaleOrderByWithAggregationInput.schema';
import { SaleScalarWhereWithAggregatesInputObjectSchema as SaleScalarWhereWithAggregatesInputObjectSchema } from './objects/SaleScalarWhereWithAggregatesInput.schema';
import { SaleScalarFieldEnumSchema } from './enums/SaleScalarFieldEnum.schema';
import { SaleCountAggregateInputObjectSchema as SaleCountAggregateInputObjectSchema } from './objects/SaleCountAggregateInput.schema';
import { SaleMinAggregateInputObjectSchema as SaleMinAggregateInputObjectSchema } from './objects/SaleMinAggregateInput.schema';
import { SaleMaxAggregateInputObjectSchema as SaleMaxAggregateInputObjectSchema } from './objects/SaleMaxAggregateInput.schema';
import { SaleAvgAggregateInputObjectSchema as SaleAvgAggregateInputObjectSchema } from './objects/SaleAvgAggregateInput.schema';
import { SaleSumAggregateInputObjectSchema as SaleSumAggregateInputObjectSchema } from './objects/SaleSumAggregateInput.schema';

export const SaleGroupBySchema: z.ZodType<Prisma.SaleGroupByArgs> = z.object({ where: SaleWhereInputObjectSchema.optional(), orderBy: z.union([SaleOrderByWithAggregationInputObjectSchema, SaleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SaleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SaleScalarFieldEnumSchema), _count: z.union([ z.literal(true), SaleCountAggregateInputObjectSchema ]).optional(), _min: SaleMinAggregateInputObjectSchema.optional(), _max: SaleMaxAggregateInputObjectSchema.optional(), _avg: SaleAvgAggregateInputObjectSchema.optional(), _sum: SaleSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleGroupByArgs>;

export const SaleGroupByZodSchema = z.object({ where: SaleWhereInputObjectSchema.optional(), orderBy: z.union([SaleOrderByWithAggregationInputObjectSchema, SaleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SaleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SaleScalarFieldEnumSchema), _count: z.union([ z.literal(true), SaleCountAggregateInputObjectSchema ]).optional(), _min: SaleMinAggregateInputObjectSchema.optional(), _max: SaleMaxAggregateInputObjectSchema.optional(), _avg: SaleAvgAggregateInputObjectSchema.optional(), _sum: SaleSumAggregateInputObjectSchema.optional() }).strict();