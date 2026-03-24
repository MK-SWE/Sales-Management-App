import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { WarehouseCreateNestedOneWithoutTransfersInInputObjectSchema as WarehouseCreateNestedOneWithoutTransfersInInputObjectSchema } from './WarehouseCreateNestedOneWithoutTransfersInInput.schema';
import { UserCreateNestedOneWithoutInventoryTransfersInputObjectSchema as UserCreateNestedOneWithoutInventoryTransfersInputObjectSchema } from './UserCreateNestedOneWithoutInventoryTransfersInput.schema';
import { InventoryTransferItemCreateNestedManyWithoutTransferInputObjectSchema as InventoryTransferItemCreateNestedManyWithoutTransferInputObjectSchema } from './InventoryTransferItemCreateNestedManyWithoutTransferInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  transferNumber: z.string(),
  status: TransferStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  transferredAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  destWarehouse: z.lazy(() => WarehouseCreateNestedOneWithoutTransfersInInputObjectSchema),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutInventoryTransfersInputObjectSchema).optional(),
  items: z.lazy(() => InventoryTransferItemCreateNestedManyWithoutTransferInputObjectSchema).optional()
}).strict();
export const InventoryTransferCreateWithoutSourceWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateWithoutSourceWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateWithoutSourceWarehouseInput>;
export const InventoryTransferCreateWithoutSourceWarehouseInputObjectZodSchema = makeSchema();
