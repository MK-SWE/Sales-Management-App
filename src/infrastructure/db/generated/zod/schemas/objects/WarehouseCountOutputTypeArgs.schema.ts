import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseCountOutputTypeSelectObjectSchema as WarehouseCountOutputTypeSelectObjectSchema } from './WarehouseCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WarehouseCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const WarehouseCountOutputTypeArgsObjectSchema = makeSchema();
export const WarehouseCountOutputTypeArgsObjectZodSchema = makeSchema();
