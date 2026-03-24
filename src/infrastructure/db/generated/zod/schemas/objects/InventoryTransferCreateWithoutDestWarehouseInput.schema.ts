import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { WarehouseCreateNestedOneWithoutTransfersOutInputObjectSchema as WarehouseCreateNestedOneWithoutTransfersOutInputObjectSchema } from './WarehouseCreateNestedOneWithoutTransfersOutInput.schema';
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
  sourceWarehouse: z.lazy(() => WarehouseCreateNestedOneWithoutTransfersOutInputObjectSchema),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutInventoryTransfersInputObjectSchema).optional(),
  items: z.lazy(() => InventoryTransferItemCreateNestedManyWithoutTransferInputObjectSchema).optional()
}).strict();
export const InventoryTransferCreateWithoutDestWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateWithoutDestWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateWithoutDestWarehouseInput>;
export const InventoryTransferCreateWithoutDestWarehouseInputObjectZodSchema = makeSchema();
