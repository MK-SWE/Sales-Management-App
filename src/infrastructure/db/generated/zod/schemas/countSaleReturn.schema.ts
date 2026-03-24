import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnOrderByWithRelationInputObjectSchema as SaleReturnOrderByWithRelationInputObjectSchema } from './objects/SaleReturnOrderByWithRelationInput.schema';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './objects/SaleReturnWhereInput.schema';
import { SaleReturnWhereUniqueInputObjectSchema as SaleReturnWhereUniqueInputObjectSchema } from './objects/SaleReturnWhereUniqueInput.schema';
import { SaleReturnCountAggregateInputObjectSchema as SaleReturnCountAggregateInputObjectSchema } from './objects/SaleReturnCountAggregateInput.schema';

export const SaleReturnCountSchema: z.ZodType<Prisma.SaleReturnCountArgs> = z.object({ orderBy: z.union([SaleReturnOrderByWithRelationInputObjectSchema, SaleReturnOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnWhereInputObjectSchema.optional(), cursor: SaleReturnWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleReturnCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnCountArgs>;

export const SaleReturnCountZodSchema = z.object({ orderBy: z.union([SaleReturnOrderByWithRelationInputObjectSchema, SaleReturnOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaleReturnWhereInputObjectSchema.optional(), cursor: SaleReturnWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaleReturnCountAggregateInputObjectSchema ]).optional() }).strict();