import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseOrderByWithRelationInputObjectSchema as WarehouseOrderByWithRelationInputObjectSchema } from './objects/WarehouseOrderByWithRelationInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './objects/WarehouseWhereInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './objects/WarehouseWhereUniqueInput.schema';
import { WarehouseCountAggregateInputObjectSchema as WarehouseCountAggregateInputObjectSchema } from './objects/WarehouseCountAggregateInput.schema';

export const WarehouseCountSchema: z.ZodType<Prisma.WarehouseCountArgs> = z.object({ orderBy: z.union([WarehouseOrderByWithRelationInputObjectSchema, WarehouseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseWhereInputObjectSchema.optional(), cursor: WarehouseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WarehouseCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseCountArgs>;

export const WarehouseCountZodSchema = z.object({ orderBy: z.union([WarehouseOrderByWithRelationInputObjectSchema, WarehouseOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseWhereInputObjectSchema.optional(), cursor: WarehouseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WarehouseCountAggregateInputObjectSchema ]).optional() }).strict();