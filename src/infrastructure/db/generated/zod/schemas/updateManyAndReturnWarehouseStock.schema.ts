import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockSelectObjectSchema as WarehouseStockSelectObjectSchema } from './objects/WarehouseStockSelect.schema';
import { WarehouseStockUpdateManyMutationInputObjectSchema as WarehouseStockUpdateManyMutationInputObjectSchema } from './objects/WarehouseStockUpdateManyMutationInput.schema';
import { WarehouseStockWhereInputObjectSchema as WarehouseStockWhereInputObjectSchema } from './objects/WarehouseStockWhereInput.schema';

export const WarehouseStockUpdateManyAndReturnSchema: z.ZodType<Prisma.WarehouseStockUpdateManyAndReturnArgs> = z.object({ select: WarehouseStockSelectObjectSchema.optional(), data: WarehouseStockUpdateManyMutationInputObjectSchema, where: WarehouseStockWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WarehouseStockUpdateManyAndReturnArgs>;

export const WarehouseStockUpdateManyAndReturnZodSchema = z.object({ select: WarehouseStockSelectObjectSchema.optional(), data: WarehouseStockUpdateManyMutationInputObjectSchema, where: WarehouseStockWhereInputObjectSchema.optional() }).strict();