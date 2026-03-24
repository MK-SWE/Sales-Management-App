import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { InventoryTransferItemFindManySchema as InventoryTransferItemFindManySchema } from '../findManyInventoryTransferItem.schema';
import { InventoryTransferCountOutputTypeArgsObjectSchema as InventoryTransferCountOutputTypeArgsObjectSchema } from './InventoryTransferCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sourceWarehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  destWarehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => InventoryTransferItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => InventoryTransferCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const InventoryTransferIncludeObjectSchema: z.ZodType<Prisma.InventoryTransferInclude> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferInclude>;
export const InventoryTransferIncludeObjectZodSchema = makeSchema();
