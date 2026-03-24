import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferUpdateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUpdateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUpdateWithoutSourceWarehouseInput.schema';
import { InventoryTransferUncheckedUpdateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedUpdateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedUpdateWithoutSourceWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InventoryTransferUpdateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedUpdateWithoutSourceWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInput>;
export const InventoryTransferUpdateWithWhereUniqueWithoutSourceWarehouseInputObjectZodSchema = makeSchema();
