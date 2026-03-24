import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockUpdateWithoutWarehouseInputObjectSchema as WarehouseStockUpdateWithoutWarehouseInputObjectSchema } from './WarehouseStockUpdateWithoutWarehouseInput.schema';
import { WarehouseStockUncheckedUpdateWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedUpdateWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedUpdateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WarehouseStockUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUncheckedUpdateWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInput>;
export const WarehouseStockUpdateWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
