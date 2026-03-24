import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WarehouseStockSelectObjectSchema as WarehouseStockSelectObjectSchema } from './objects/WarehouseStockSelect.schema';
import { WarehouseStockIncludeObjectSchema as WarehouseStockIncludeObjectSchema } from './objects/WarehouseStockInclude.schema';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './objects/WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockCreateInputObjectSchema as WarehouseStockCreateInputObjectSchema } from './objects/WarehouseStockCreateInput.schema';
import { WarehouseStockUncheckedCreateInputObjectSchema as WarehouseStockUncheckedCreateInputObjectSchema } from './objects/WarehouseStockUncheckedCreateInput.schema';
import { WarehouseStockUpdateInputObjectSchema as WarehouseStockUpdateInputObjectSchema } from './objects/WarehouseStockUpdateInput.schema';
import { WarehouseStockUncheckedUpdateInputObjectSchema as WarehouseStockUncheckedUpdateInputObjectSchema } from './objects/WarehouseStockUncheckedUpdateInput.schema';

export const WarehouseStockUpsertOneSchema: z.ZodType<Prisma.WarehouseStockUpsertArgs> = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), where: WarehouseStockWhereUniqueInputObjectSchema, create: z.union([ WarehouseStockCreateInputObjectSchema, WarehouseStockUncheckedCreateInputObjectSchema ]), update: z.union([ WarehouseStockUpdateInputObjectSchema, WarehouseStockUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WarehouseStockUpsertArgs>;

export const WarehouseStockUpsertOneZodSchema = z.object({ select: WarehouseStockSelectObjectSchema.optional(), include: WarehouseStockIncludeObjectSchema.optional(), where: WarehouseStockWhereUniqueInputObjectSchema, create: z.union([ WarehouseStockCreateInputObjectSchema, WarehouseStockUncheckedCreateInputObjectSchema ]), update: z.union([ WarehouseStockUpdateInputObjectSchema, WarehouseStockUncheckedUpdateInputObjectSchema ]) }).strict();