import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseUpdateWithoutTransfersOutInputObjectSchema as WarehouseUpdateWithoutTransfersOutInputObjectSchema } from './WarehouseUpdateWithoutTransfersOutInput.schema';
import { WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema as WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema } from './WarehouseUncheckedUpdateWithoutTransfersOutInput.schema';
import { WarehouseCreateWithoutTransfersOutInputObjectSchema as WarehouseCreateWithoutTransfersOutInputObjectSchema } from './WarehouseCreateWithoutTransfersOutInput.schema';
import { WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema as WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema } from './WarehouseUncheckedCreateWithoutTransfersOutInput.schema';
import { WarehouseWhereInputObjectSchema as WarehouseWhereInputObjectSchema } from './WarehouseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WarehouseUpdateWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUncheckedUpdateWithoutTransfersOutInputObjectSchema)]),
  create: z.union([z.lazy(() => WarehouseCreateWithoutTransfersOutInputObjectSchema), z.lazy(() => WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema)]),
  where: z.lazy(() => WarehouseWhereInputObjectSchema).optional()
}).strict();
export const WarehouseUpsertWithoutTransfersOutInputObjectSchema: z.ZodType<Prisma.WarehouseUpsertWithoutTransfersOutInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpsertWithoutTransfersOutInput>;
export const WarehouseUpsertWithoutTransfersOutInputObjectZodSchema = makeSchema();
