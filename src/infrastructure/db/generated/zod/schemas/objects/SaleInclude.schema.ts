import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SaleItemFindManySchema as SaleItemFindManySchema } from '../findManySaleItem.schema';
import { SaleReturnFindManySchema as SaleReturnFindManySchema } from '../findManySaleReturn.schema';
import { SaleCountOutputTypeArgsObjectSchema as SaleCountOutputTypeArgsObjectSchema } from './SaleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  warehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => SaleItemFindManySchema)]).optional(),
  returns: z.union([z.boolean(), z.lazy(() => SaleReturnFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SaleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SaleIncludeObjectSchema: z.ZodType<Prisma.SaleInclude> = makeSchema() as unknown as z.ZodType<Prisma.SaleInclude>;
export const SaleIncludeObjectZodSchema = makeSchema();
