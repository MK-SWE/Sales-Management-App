import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCreateWithoutStocksInputObjectSchema as WarehouseCreateWithoutStocksInputObjectSchema } from './WarehouseCreateWithoutStocksInput.schema';
import { WarehouseUncheckedCreateWithoutStocksInputObjectSchema as WarehouseUncheckedCreateWithoutStocksInputObjectSchema } from './WarehouseUncheckedCreateWithoutStocksInput.schema';
import { WarehouseCreateOrConnectWithoutStocksInputObjectSchema as WarehouseCreateOrConnectWithoutStocksInputObjectSchema } from './WarehouseCreateOrConnectWithoutStocksInput.schema';
import { WarehouseUpsertWithoutStocksInputObjectSchema as WarehouseUpsertWithoutStocksInputObjectSchema } from './WarehouseUpsertWithoutStocksInput.schema';
import { WarehouseWhereUniqueInputObjectSchema as WarehouseWhereUniqueInputObjectSchema } from './WarehouseWhereUniqueInput.schema';
import { WarehouseUpdateToOneWithWhereWithoutStocksInputObjectSchema as WarehouseUpdateToOneWithWhereWithoutStocksInputObjectSchema } from './WarehouseUpdateToOneWithWhereWithoutStocksInput.schema';
import { WarehouseUpdateWithoutStocksInputObjectSchema as WarehouseUpdateWithoutStocksInputObjectSchema } from './WarehouseUpdateWithoutStocksInput.schema';
import { WarehouseUncheckedUpdateWithoutStocksInputObjectSchema as WarehouseUncheckedUpdateWithoutStocksInputObjectSchema } from './WarehouseUncheckedUpdateWithoutStocksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WarehouseCreateWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutStocksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WarehouseCreateOrConnectWithoutStocksInputObjectSchema).optional(),
  upsert: z.lazy(() => WarehouseUpsertWithoutStocksInputObjectSchema).optional(),
  connect: z.lazy(() => WarehouseWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WarehouseUpdateToOneWithWhereWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUpdateWithoutStocksInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutStocksInputObjectSchema)]).optional()
}).strict();
export const WarehouseUpdateOneRequiredWithoutStocksNestedInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutStocksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateOneRequiredWithoutStocksNestedInput>;
export const WarehouseUpdateOneRequiredWithoutStocksNestedInputObjectZodSchema = makeSchema();
