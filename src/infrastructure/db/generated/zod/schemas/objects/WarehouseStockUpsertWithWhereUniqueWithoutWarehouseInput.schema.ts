import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockUpdateWithoutWarehouseInputObjectSchema as WarehouseStockUpdateWithoutWarehouseInputObjectSchema } from './WarehouseStockUpdateWithoutWarehouseInput.schema';
import { WarehouseStockUncheckedUpdateWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedUpdateWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedUpdateWithoutWarehouseInput.schema';
import { WarehouseStockCreateWithoutWarehouseInputObjectSchema as WarehouseStockCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateWithoutWarehouseInput.schema';
import { WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WarehouseStockUpdateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUncheckedUpdateWithoutWarehouseInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInput>;
export const WarehouseStockUpsertWithWhereUniqueWithoutWarehouseInputObjectZodSchema = makeSchema();
