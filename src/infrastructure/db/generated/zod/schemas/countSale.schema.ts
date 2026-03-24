import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleOrderByWithRelationInputObjectSchema as SaleOrderByWithRelationInputObjectSchema } from './objects/SaleOrderByWithRelationInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleCountAggregateInputObjectSchema as SaleCountAggregateInputObjectSchema } from './objects/SaleCountAggregateInput.schema';

export const SaleCountSchema: z.ZodType<Prisma.SaleCountArgs> = z.object({ orderBy: z.union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleWhereInputObjectSchema.optional(), cursor: SaleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleCountArgs>;

export const SaleCountZodSchema = z.object({ orderBy: z.union([SaleOrderByWithRelationInputObjectSchema, SaleOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleWhereInputObjectSchema.optional(), cursor: SaleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleCountAggregateInputObjectSchema ]).optional() }).strict();