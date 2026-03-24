import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleCountOutputTypeCountItemsArgsObjectSchema as SaleCountOutputTypeCountItemsArgsObjectSchema } from './SaleCountOutputTypeCountItemsArgs.schema';
import { SaleCountOutputTypeCountReturnsArgsObjectSchema as SaleCountOutputTypeCountReturnsArgsObjectSchema } from './SaleCountOutputTypeCountReturnsArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => SaleCountOutputTypeCountItemsArgsObjectSchema)]).optional(),
  returns: z.union([z.boolean(), z.lazy(() => SaleCountOutputTypeCountReturnsArgsObjectSchema)]).optional()
}).strict();
export const SaleCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SaleCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SaleCountOutputTypeSelect>;
export const SaleCountOutputTypeSelectObjectZodSchema = makeSchema();
