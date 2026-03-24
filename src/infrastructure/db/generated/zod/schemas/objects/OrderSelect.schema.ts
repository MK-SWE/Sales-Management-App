import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { QuotationArgsObjectSchema as QuotationArgsObjectSchema } from './QuotationArgs.schema';
import { OrderItemFindManySchema as OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { AddressArgsObjectSchema as AddressArgsObjectSchema } from './AddressArgs.schema';
import { OrderCountOutputTypeArgsObjectSchema as OrderCountOutputTypeArgsObjectSchema } from './OrderCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  quotationId: z.boolean().optional(),
  quotation: z.union([z.boolean(), z.lazy(() => QuotationArgsObjectSchema)]).optional(),
  status: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  totalAmount: z.boolean().optional(),
  shippingAddressId: z.boolean().optional(),
  shippingAddress: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional(),
  snapshotAddress: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrderSelectObjectSchema: z.ZodType<Prisma.OrderSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrderSelect>;
export const OrderSelectObjectZodSchema = makeSchema();
