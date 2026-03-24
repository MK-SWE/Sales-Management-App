import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereUniqueInputObjectSchema as InventoryTransferWhereUniqueInputObjectSchema } from './InventoryTransferWhereUniqueInput.schema';
import { InventoryTransferCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferCreateWithoutDestWarehouseInput.schema';
import { InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateWithoutDestWarehouseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InventoryTransferCreateWithoutDestWarehouseInputObjectSchema), z.lazy(() => InventoryTransferUncheckedCreateWithoutDestWarehouseInputObjectSchema)])
}).strict();
export const InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutDestWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateOrConnectWithoutDestWarehouseInput>;
export const InventoryTransferCreateOrConnectWithoutDestWarehouseInputObjectZodSchema = makeSchema();
