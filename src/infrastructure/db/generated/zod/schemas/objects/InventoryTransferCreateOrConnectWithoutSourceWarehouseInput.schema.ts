import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutSourceWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutSourceWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutSourceWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutSourceWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutSourceWarehouseInput>;
export const InventoryTransferCreateOrConnectWithoutSourceWarehouseInputObjectZodSchema = makeSchema();
