import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferSelectObjectSchema as InventoryTransferSelectObjectSchema } from './InventoryTransferSelect.schema';
import { InventoryTransferIncludeObjectSchema as InventoryTransferIncludeObjectSchema } from './InventoryTransferInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InventoryTransferSelectObjectSchema).optional(),
  include: z.lazy(() => InventoryTransferIncludeObjectSchema).optional()
}).strict();
export const InventoryTransferArgsObjectSchema = makeSchema();
export const InventoryTransferArgsObjectZodSchema = makeSchema();
