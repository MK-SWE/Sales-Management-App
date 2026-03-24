import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleArgsObjectSchema as SaleArgsObjectSchema } from './SaleArgs.schema';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SaleReturnItemFindManySchema as SaleReturnItemFindManySchema } from '../findManySaleReturnItem.schema';
import { SaleReturnCountOutputTypeArgsObjectSchema as SaleReturnCountOutputTypeArgsObjectSchema } from './SaleReturnCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  originalSale: z.union([z.boolean(), z.lazy(() => SaleArgsObjectSchema)]).optional(),
  warehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => SaleReturnItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SaleReturnCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SaleReturnIncludeObjectSchema: z.ZodType<Prisma.SaleReturnInclude> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnInclude>;
export const SaleReturnIncludeObjectZodSchema = makeSchema();
