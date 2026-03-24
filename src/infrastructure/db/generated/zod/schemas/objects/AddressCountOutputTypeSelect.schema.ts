import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCountOutputTypeCountOrdersArgsObjectSchema as AddressCountOutputTypeCountOrdersArgsObjectSchema } from './AddressCountOutputTypeCountOrdersArgs.schema'

const makeSchema = () => z.object({
  orders: z.union([z.boolean(), z.lazy(() => AddressCountOutputTypeCountOrdersArgsObjectSchema)]).optional()
}).strict();
export const AddressCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AddressCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AddressCountOutputTypeSelect>;
export const AddressCountOutputTypeSelectObjectZodSchema = makeSchema();
