import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { QuotationCountOutputTypeCountItemsArgsObjectSchema as QuotationCountOutputTypeCountItemsArgsObjectSchema } from './QuotationCountOutputTypeCountItemsArgs.schema'

const makeSchema = () => z.object({
  items: z.union([z.boolean(), z.lazy(() => QuotationCountOutputTypeCountItemsArgsObjectSchema)]).optional()
}).strict();
export const QuotationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.QuotationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.QuotationCountOutputTypeSelect>;
export const QuotationCountOutputTypeSelectObjectZodSchema = makeSchema();
