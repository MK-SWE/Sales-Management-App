import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockSelectObjectSchema as WarehouseStockSelectObjectSchema } from './WarehouseStockSelect.schema';
import { WarehouseStockIncludeObjectSchema as WarehouseStockIncludeObjectSchema } from './WarehouseStockInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WarehouseStockSelectObjectSchema).optional(),
  include: z.lazy(() => WarehouseStockIncludeObjectSchema).optional()
}).strict();
export const WarehouseStockArgsObjectSchema = makeSchema();
export const WarehouseStockArgsObjectZodSchema = makeSchema();
