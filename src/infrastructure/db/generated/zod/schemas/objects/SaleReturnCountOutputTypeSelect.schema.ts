import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleReturnCountOutputTypeCountItemsArgsObjectSchema as SaleReturnCountOutputTypeCountItemsArgsObjectSchema } from './SaleReturnCountOutputTypeCountItemsArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => SaleReturnCountOutputTypeCountItemsArgsObjectSchema)]).optional()
}).strict();
export const SaleReturnCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SaleReturnCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCountOutputTypeSelect>;
export const SaleReturnCountOutputTypeSelectObjectZodSchema = makeSchema();
