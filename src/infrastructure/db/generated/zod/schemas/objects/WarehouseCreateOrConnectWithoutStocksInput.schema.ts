import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseCreateWithoutStocksInputObjectSchema as WarehouseCreateWithoutStocksInputObjectSchema } from './WarehouseCreateWithoutStocksInput.schema';
import { WarehouseUncheckedCreateWithoutStocksInputObjectSchema as WarehouseUncheckedCreateWithoutStocksInputObjectSchema } from './WarehouseUncheckedCreateWithoutStocksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WarehouseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WarehouseCreateWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutStocksInputObjectSchema)])
}).strict();
export const WarehouseCreateOrConnectWithoutStocksInputObjectSchema: z.ZodType<Prisma.WarehouseCreateOrConnectWithoutStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateOrConnectWithoutStocksInput>;
export const WarehouseCreateOrConnectWithoutStocksInputObjectZodSchema = makeSchema();
