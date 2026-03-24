import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemOrderByWithRelationInputObjectSchema as SaleItemOrderByWithRelationInputObjectSchema } from './objects/SaleItemOrderByWithRelationInput.schema';
import { SaleItemWhereInputObjectSchema as SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';
import { SaleItemCountAggregateInputObjectSchema as SaleItemCountAggregateInputObjectSchema } from './objects/SaleItemCountAggregateInput.schema';

export const SaleItemCountSchema: z.ZodType<Prisma.SaleItemCountArgs> = z.object({ orderBy: z.union([SaleItemOrderByWithRelationInputObjectSchema, SaleItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleItemWhereInputObjectSchema.optional(), cursor: SaleItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleItemCountArgs>;

export const SaleItemCountZodSchema = z.object({ orderBy: z.union([SaleItemOrderByWithRelationInputObjectSchema, SaleItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleItemWhereInputObjectSchema.optional(), cursor: SaleItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleItemCountAggregateInputObjectSchema ]).optional() }).strict();