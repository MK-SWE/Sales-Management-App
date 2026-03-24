import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockSelectObjectSchema as WarehouseStockSelectObjectSchema } from './objects/WarehouseStockSelect.schema';
import { WarehouseStockIncludeObjectSchema as WarehouseStockIncludeObjectSchema } from './objects/WarehouseStockInclude.schema';
import { WarehouseStockCreateInputObjectSchema as WarehouseStockCreateInputObjectSchema } from './objects/WarehouseStockCreateInput.schema';
import { WarehouseStockUncheckedCreateInputObjectSchema as WarehouseStockUncheckedCreateInputObjectSchema } from './objects/WarehouseStockUncheckedCreateInput.schema';

export const WarehouseStockCreateOneSchema: z.ZodType<Prisma.WarehouseStockCreateArgs> = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), data: z.union([WarehouseStockCreateInputObjectSchema, WarehouseStockUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WarehouseStockCreateArgs>;

export const WarehouseStockCreateOneZodSchema = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), data: z.union([WarehouseStockCreateInputObjectSchema, WarehouseStockUncheckedCreateInputObjectSchema]) }).strict();