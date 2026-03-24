import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferCountOutputTypeCountItemsArgsObjectSchema as InventoryTransferCountOutputTypeCountItemsArgsObjectSchema } from './InventoryTransferCountOutputTypeCountItemsArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => InventoryTransferCountOutputTypeCountItemsArgsObjectSchema)]).optional()
}).strict();
export const InventoryTransferCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.InventoryTransferCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferCountOutputTypeSelect>;
export const InventoryTransferCountOutputTypeSelectObjectZodSchema = makeSchema();
