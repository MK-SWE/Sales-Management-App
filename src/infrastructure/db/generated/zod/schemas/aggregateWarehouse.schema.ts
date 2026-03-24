import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './objects/WarehouseOrderByWithRelationInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './objects/WarehouseWhereInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './objects/WarehouseWhereUniqueInput.schema';
import { WarehouseCountAggregateInputObjectSchema as WarehouseCountAggregateInputObjectSchema } from './objects/WarehouseCountAggregateInput.schema';
import { WarehouseMinAggregateInputObjectSchema as WarehouseMinAggregateInputObjectSchema } from './objects/WarehouseMinAggregateInput.schema';
import { WarehouseMaxAggregateInputObjectSchema as WarehouseMaxAggregateInputObjectSchema } from './objects/WarehouseMaxAggregateInput.schema';

export const WarehouseAggregateSchema: z.ZodType<Prisma.WarehouseAggregateArgs> = z.object({ orderBy: z.union([WarehouseOrderByWithRelationInputObjectSchema, WarehouseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseWhereInputObjectSchema.optional(), cursor: WarehouseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WarehouseCountAggregateInputObjectSchema ]).optional(), _min: WarehouseMinAggregateInputObjectSchema.optional(), _max: WarehouseMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseAggregateArgs>;

export const WarehouseAggregateZodSchema = z.object({ orderBy: z.union([WarehouseOrderByWithRelationInputObjectSchema, WarehouseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseWhereInputObjectSchema.optional(), cursor: WarehouseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WarehouseCountAggregateInputObjectSchema ]).optional(), _min: WarehouseMinAggregateInputObjectSchema.optional(), _max: WarehouseMaxAggregateInputObjectSchema.optional() }).strict();