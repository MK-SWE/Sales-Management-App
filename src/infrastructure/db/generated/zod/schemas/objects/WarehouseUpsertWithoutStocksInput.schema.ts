import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseUpdateWithoutStocksInputObjectSchema as WarehouseUpdateWithoutStocksInputObjectSchema } from './WarehouseUpdateWithoutStocksInput.schema';
import { WarehouseUncheckedUpdateWithoutStocksInputObjectSchema as WarehouseUncheckedUpdateWithoutStocksInputObjectSchema } from './WarehouseUncheckedUpdateWithoutStocksInput.schema';
import { WarehouseCreateWithoutStocksInputObjectSchema as WarehouseCreateWithoutStocksInputObjectSchema } from './WarehouseCreateWithoutStocksInput.schema';
import { WarehouseUncheckedCreateWithoutStocksInputObjectSchema as WarehouseUncheckedCreateWithoutStocksInputObjectSchema } from './WarehouseUncheckedCreateWithoutStocksInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WarehouseUpdateWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutStocksInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseCreateWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutStocksInputObjectSchema)]),
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseUpsertWithoutStocksInputObjectSchema: z.ZodType<Prisma.WarehouseUpsertWithoutStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpsertWithoutStocksInput>;
export const WarehouseUpsertWithoutStocksInputObjectZodSchema = makeSchema();
