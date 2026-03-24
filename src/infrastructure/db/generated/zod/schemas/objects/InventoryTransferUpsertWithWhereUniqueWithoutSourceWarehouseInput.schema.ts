import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUpdateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUpdateWithoutSourceWarehouseInput.schema';
import { InventoryTransferUncheckedUpdateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedUpdateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutSourceWarehouseInput.schema';
import { InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutSourceWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutSourceWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryTransferUpdateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutSourceWarehouseInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInput>;
export const InventoryTransferUpsertWithWhereUniqueWithoutSourceWarehouseInputObjectZodSchema = makeSchema();
