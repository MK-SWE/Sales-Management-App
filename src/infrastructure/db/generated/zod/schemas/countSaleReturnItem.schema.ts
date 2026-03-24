import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemOrderByWithRelationInputObjectSchema as SaleReturnItemOrderByWithRelationInputObjectSchema } from './objects/SaleReturnItemOrderByWithRelationInput.schema';
import { SaleReturnItemWhereInputObjectSchema as SaleReturnItemWhereInputObjectSchema } from './objects/SaleReturnItemWhereInput.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './objects/SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemCountAggregateInputObjectSchema as SaleReturnItemCountAggregateInputObjectSchema } from './objects/SaleReturnItemCountAggregateInput.schema';

export const SaleReturnItemCountSchema: z.ZodType<Prisma.SaleReturnItemCountArgs> = z.object({ orderBy: z.union([SaleReturnItemOrderByWithRelationInputObjectSchema, SaleReturnItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnItemWhereInputObjectSchema.optional(), cursor: SaleReturnItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleReturnItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemCountArgs>;

export const SaleReturnItemCountZodSchema = z.object({ orderBy: z.union([SaleReturnItemOrderByWithRelationInputObjectSchema, SaleReturnItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnItemWhereInputObjectSchema.optional(), cursor: SaleReturnItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleReturnItemCountAggregateInputObjectSchema ]).optional() }).strict();