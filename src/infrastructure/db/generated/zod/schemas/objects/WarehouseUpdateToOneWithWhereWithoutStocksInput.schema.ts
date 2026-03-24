import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema';
import { WarehouseUpdateWithoutStocksInputObjectSchema as WarehouseUpdateWithoutStocksInputObjectSchema } from './WarehouseUpdateWithoutStocksInput.schema';
import { WarehouseUncheckedUpdateWithoutStocksInputObjectSchema as WarehouseUncheckedUpdateWithoutStocksInputObjectSchema } from './WarehouseUncheckedUpdateWithoutStocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WarehouseUpdateWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutStocksInputObjectSchema)])
}).strict();
export const WarehouseUpdateToOneWithWhereWithoutStocksInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateToOneWithWhereWithoutStocksInput>;
export const WarehouseUpdateToOneWithWhereWithoutStocksInputObjectZodSchema = makeSchema();
