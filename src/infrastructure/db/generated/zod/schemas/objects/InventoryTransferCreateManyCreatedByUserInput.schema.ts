import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  transferNumber: z.string(),
  sourceWarehouseId: z.string(),
  destWarehouseId: z.string(),
  status: TransferStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  transferredAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const InventoryTransferCreateManyCreatedByUserInputObjectSchema: z.ZodType<Prisma.InventoryTransferCreateManyCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCreateManyCreatedByUserInput>;
export const InventoryTransferCreateManyCreatedByUserInputObjectZodSchema = makeSchema();
