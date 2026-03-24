import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutStocksInputObjectSchema as WarehouseCreateWithoutStocksInputObjectSchema } from './WarehouseCreateWithoutStocksInput.schema';
import { WarehouseUncheckedCreateWithoutStocksInputObjectSchema as WarehouseUncheckedCreateWithoutStocksInputObjectSchema } from './WarehouseUncheckedCreateWithoutStocksInput.schema';
import { WarehouseCreateOrConnectWithoutStocksInputObjectSchema as WarehouseCreateOrConnectWithoutStocksInputObjectSchema } from './WarehouseCreateOrConnectWithoutStocksInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutStocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutStocksInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional()
}).strict();
export const WarehouseCreateNestedOneWithoutStocksInputObjectSchema: z.ZodType<Prisma.WarehouseCreateNestedOneWithoutStocksInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateNestedOneWithoutStocksInput>;
export const WarehouseCreateNestedOneWithoutStocksInputObjectZodSchema = makeSchema();
