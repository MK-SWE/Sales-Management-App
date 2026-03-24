import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { InventoryTransferItemFindManySchema as InventoryTransferItemFindManySchema } from '../findManyInventoryTransferItem.schema';
import { InventoryTransferCountOutputTypeArgsObjectSchema as InventoryTransferCountOutputTypeArgsObjectSchema } from './InventoryTransferCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  transferNumber: z.boolean().optional(),
  sourceWarehouseId: z.boolean().optional(),
  destWarehouseId: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdByUserId: z.boolean().optional(),
  transferredAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  sourceWarehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  destWarehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => InventoryTransferItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => InventoryTransferCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const InventoryTransferSelectObjectSchema: z.ZodType<Prisma.InventoryTransferSelect> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferSelect>;
export const InventoryTransferSelectObjectZodSchema = makeSchema();
