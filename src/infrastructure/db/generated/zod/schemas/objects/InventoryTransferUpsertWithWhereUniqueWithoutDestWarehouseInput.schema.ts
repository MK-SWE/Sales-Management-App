import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithoutDestWarehouseInputObjectSchema as InventoryTransferUpdateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUpdateWithoutDestWarehouseInput.schema';
import { InventoryTransferUncheckedUpdateWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedUpdateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutDestWarehouseInput.schema';
import { InventoryTransferCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutDestWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutDestWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InventoryTransferUpdateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutDestWarehouseInputObjectSchema)]),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInput>;
export const InventoryTransferUpsertWithWhereUniqueWithoutDestWarehouseInputObjectZodSchema = makeSchema();
