import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockSelectObjectSchema as WarehouseStockSelectObjectSchema } from './objects/WarehouseStockSelect.schema';
import { WarehouseStockIncludeObjectSchema as WarehouseStockIncludeObjectSchema } from './objects/WarehouseStockInclude.schema';
import { WarehouseStockUpdateInputObjectSchema as WarehouseStockUpdateInputObjectSchema } from './objects/WarehouseStockUpdateInput.schema';
import { WarehouseStockUncheckedUpdateInputObjectSchema as WarehouseStockUncheckedUpdateInputObjectSchema } from './objects/WarehouseStockUncheckedUpdateInput.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './objects/WarehouseStockWhereUniqueInput.schema';

export const WarehouseStockUpdateOneSchema: z.ZodType<Prisma.WarehouseStockUpdateArgs> = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), data: z.union([WarehouseStockUpdateInputObjectSchema, WarehouseStockUncheckedUpdateInputObjectSchema]), where: WarehouseStockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WarehouseStockUpdateArgs>;

export const WarehouseStockUpdateOneZodSchema = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), data: z.union([WarehouseStockUpdateInputObjectSchema, WarehouseStockUncheckedUpdateInputObjectSchema]), where: WarehouseStockWhereUniqueInputObjectSchema }).strict();