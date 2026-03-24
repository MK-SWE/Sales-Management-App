import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseArgsObjectSchema as WarehouseArgsObjectSchema } from './WarehouseArgs.schema';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SaleItemFindManySchema as SaleItemFindManySchema } from '../findManySaleItem.schema';
import { SaleReturnFindManySchema as SaleReturnFindManySchema } from '../findManySaleReturn.schema';
import { SaleCountOutputTypeArgsObjectSchema as SaleCountOutputTypeArgsObjectSchema } from './SaleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  saleNumber: z.boolean().optional(),
  warehouseId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  cashClientName: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  paymentStatus: z.boolean().optional(),
  status: z.boolean().optional(),
  subtotal: z.boolean().optional(),
  grandTotal: z.boolean().optional(),
  amountPaid: z.boolean().optional(),
  amountDue: z.boolean().optional(),
  notes: z.boolean().optional(),
  soldAt: z.boolean().optional(),
  createdByUserId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  warehouse: z.union([z.boolean(), z.lazy(() => WarehouseArgsObjectSchema)]).optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => SaleItemFindManySchema)]).optional(),
  returns: z.union([z.boolean(), z.lazy(() => SaleReturnFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SaleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SaleSelectObjectSchema: z.ZodType<Prisma.SaleSelect> = makeSchema() as unknown as z.ZodType<Prisma.SaleSelect>;
export const SaleSelectObjectZodSchema = makeSchema();
