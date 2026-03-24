import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCountOutputTypeSelectObjectSchema as SaleReturnCountOutputTypeSelectObjectSchema } from './SaleReturnCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SaleReturnCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SaleReturnCountOutputTypeArgsObjectSchema = makeSchema();
export const SaleReturnCountOutputTypeArgsObjectZodSchema = makeSchema();
