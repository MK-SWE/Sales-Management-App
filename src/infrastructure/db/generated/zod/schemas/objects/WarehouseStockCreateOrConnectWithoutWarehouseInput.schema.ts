import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockWhereUniqueInputObjectSchema as WarehouseStockWhereUniqueInputObjectSchema } from './WarehouseStockWhereUniqueInput.schema';
import { WarehouseStockCreateWithoutWarehouseInputObjectSchema as WarehouseStockCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateWithoutWarehouseInput.schema';
import { WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedCreateWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseStockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseStockCreateWithoutWarehouseInputObjectSchema), z.lazy(() => WarehouseStockUncheckedCreateWithoutWarehouseInputObjectSchema)])
}).strict();
export const WarehouseStockCreateOrConnectWithoutWarehouseInputObjectSchema: z.ZodType<Prisma.WarehouseStockCreateOrConnectWithoutWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseStockCreateOrConnectWithoutWarehouseInput>;
export const WarehouseStockCreateOrConnectWithoutWarehouseInputObjectZodSchema = makeSchema();
