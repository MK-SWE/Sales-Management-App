import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { WarehouseCreateNestedOneWithoutTransfersOutInputObjectSchema as WarehouseCreateNestedOneWithoutTransfersOutInputObjectSchema } from './WarehouseCreateNestedOneWithoutTransfersOutInput.schema';
import { WarehouseCreateNestedOneWithoutTransfersInInputObjectSchema as WarehouseCreateNestedOneWithoutTransfersInInputObjectSchema } from './WarehouseCreateNestedOneWithoutTransfersInInput.schema';
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
  destWarehouse: z.lazy(() => WarehouseCreateNestedOneWithoutTransfersInInputObjectSchema),
  items: z.lazy(() => InventoryTransferItemCreateNestedManyWithoutTransferInputObjectSchema).optional()
}).strict();
export const InventoryTransferCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateWithoutCreatedByUserInput>;
export const InventoryTransferCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
