import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCountOutputTypeSelectObjectSchema as InventoryTransferCountOutputTypeSelectObjectSchema } from './InventoryTransferCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InventoryTransferCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const InventoryTransferCountOutputTypeArgsObjectSchema = makeSchema();
export const InventoryTransferCountOutputTypeArgsObjectZodSchema = makeSchema();
