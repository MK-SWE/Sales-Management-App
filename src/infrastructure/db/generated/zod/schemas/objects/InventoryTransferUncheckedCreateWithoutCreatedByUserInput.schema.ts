import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInputObjectSchema as InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInputObjectSchema } from './InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  transferNumber: z.string(),
  sourceWarehouseId: z.string(),
  destWarehouseId: z.string(),
  status: TransferStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  transferredAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => InventoryTransferItemUncheckedCreateNestedManyWithoutTransferInputObjectSchema).optional()
}).strict();
export const InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferUncheckedCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUncheckedCreateWithoutCreatedByUserInput>;
export const InventoryTransferUncheckedCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
