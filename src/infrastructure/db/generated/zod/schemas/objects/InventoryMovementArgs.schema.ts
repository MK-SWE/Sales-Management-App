import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryMovementSelectObjectSchema as InventoryMovementSelectObjectSchema } from './InventoryMovementSelect.schema';
import { InventoryMovementIncludeObjectSchema as InventoryMovementIncludeObjectSchema } from './InventoryMovementInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InventoryMovementSelectObjectSchema).optional(),
  include: z.lazy(() => InventoryMovementIncludeObjectSchema).optional()
}).strict();
export const InventoryMovementArgsObjectSchema = makeSchema();
export const InventoryMovementArgsObjectZodSchema = makeSchema();
