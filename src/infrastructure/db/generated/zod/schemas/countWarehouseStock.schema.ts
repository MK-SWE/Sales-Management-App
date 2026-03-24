import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockOrderByWithRelationInputObjectSchema as WarehouseStockOrderByWithRelationInputObjectSchema } from './objects/WarehouseStockOrderByWithRelationInput.schema';
import { WarehouseStockWhereInputObjectSchema as WarehouseStockWhereInputObjectSchema } from './objects/WarehouseStockWhereInput.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './objects/WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockCountAggregateInputObjectSchema as WarehouseStockCountAggregateInputObjectSchema } from './objects/WarehouseStockCountAggregateInput.schema';

export const WarehouseStockCountSchema: z.ZodType<Prisma.WarehouseStockCountArgs> = z.object({ orderBy: z.union([WarehouseStockOrderByWithRelationInputObjectSchema, WarehouseStockOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseStockWhereInputObjectSchema.optional(), cursor: WarehouseStockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WarehouseStockCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseStockCountArgs>;

export const WarehouseStockCountZodSchema = z.object({ orderBy: z.union([WarehouseStockOrderByWithRelationInputObjectSchema, WarehouseStockOrderByWithRelationInputObjectSchema.array()]).optional(), where: WarehouseStockWhereInputObjectSchema.optional(), cursor: WarehouseStockWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WarehouseStockCountAggregateInputObjectSchema ]).optional() }).strict();