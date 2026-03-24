import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseUpdateWithoutTransfersInInputObjectSchema as WarehouseUpdateWithoutTransfersInInputObjectSchema } from './WarehouseUpdateWithoutTransfersInInput.schema';
import { WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema as WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema } from './WarehouseUncheckedUpdateWithoutTransfersInInput.schema';
import { WarehouseCreateWithoutTransfersInInputObjectSchema as WarehouseCreateWithoutTransfersInInputObjectSchema } from './WarehouseCreateWithoutTransfersInInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersInInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WarehouseUpdateWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutTransfersInInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersInInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersInInputObjectSchema)]),
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseUpsertWithoutTransfersInInputObjectSchema: z.ZodType<Prisma.WarehouseUpsertWithoutTransfersInInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpsertWithoutTransfersInInput>;
export const WarehouseUpsertWithoutTransfersInInputObjectZodSchema = makeSchema();
