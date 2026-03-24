import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockSelectObjectSchema as WarehouseStockSelectObjectSchema } from './objects/WarehouseStockSelect.schema';
import { WarehouseStockIncludeObjectSchema as WarehouseStockIncludeObjectSchema } from './objects/WarehouseStockInclude.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './objects/WarehouseStockWhereUniqueInput.schema';

export const WarehouseStockDeleteOneSchema: z.ZodType<Prisma.WarehouseStockDeleteArgs> = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), where: WarehouseStockWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WarehouseStockDeleteArgs>;

export const WarehouseStockDeleteOneZodSchema = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), where: WarehouseStockWhereUniqueInputObjectSchema }).strict();