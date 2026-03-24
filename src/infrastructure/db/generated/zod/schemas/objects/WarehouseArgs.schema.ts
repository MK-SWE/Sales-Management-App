import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseSelectObjectSchema as WarehouseSelectObjectSchema } from './WarehouseSelect.schema';
import { WarehouseIncludeObjectSchema as WarehouseIncludeObjectSchema } from './WarehouseInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WarehouseSelectObjectSchema).optional(),
  include: z.lazy(() => WarehouseIncludeObjectSchema).optional()
}).strict();
export const WarehouseArgsObjectSchema = makeSchema();
export const WarehouseArgsObjectZodSchema = makeSchema();
