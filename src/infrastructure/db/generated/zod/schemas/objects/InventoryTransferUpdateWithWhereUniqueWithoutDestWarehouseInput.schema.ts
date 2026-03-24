import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithoutDestWarehouseInputObjectSchema as InventoryTransferUpdateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUpdateWithoutDestWarehouseInput.schema';
import { InventoryTransferUncheckedUpdateWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedUpdateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutDestWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferUpdateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutDestWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInput>;
export const InventoryTransferUpdateWithWhereUniqueWithoutDestWarehouseInputObjectZodSchema = makeSchema();
