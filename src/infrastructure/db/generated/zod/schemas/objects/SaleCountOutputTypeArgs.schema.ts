import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCountOutputTypeSelectObjectSchema as SaleCountOutputTypeSelectObjectSchema } from './SaleCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SaleCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SaleCountOutputTypeArgsObjectSchema = makeSchema();
export const SaleCountOutputTypeArgsObjectZodSchema = makeSchema();
