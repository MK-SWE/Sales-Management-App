import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemSelectObjectSchema as InventoryTransferItemSelectObjectSchema } from './InventoryTransferItemSelect.schema';
import { InventoryTransferItemIncludeObjectSchema as InventoryTransferItemIncludeObjectSchema } from './InventoryTransferItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InventoryTransferItemSelectObjectSchema).optional(),
  include: z.lazy(() => InventoryTransferItemIncludeObjectSchema).optional()
}).strict();
export const InventoryTransferItemArgsObjectSchema = makeSchema();
export const InventoryTransferItemArgsObjectZodSchema = makeSchema();
