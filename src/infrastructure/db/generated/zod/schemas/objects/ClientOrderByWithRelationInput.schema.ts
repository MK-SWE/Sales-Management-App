import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientLedgerEntryOrderByRelationAggregateInputObjectSchema as ClientLedgerEntryOrderByRelationAggregateInputObjectSchema } from './ClientLedgerEntryOrderByRelationAggregateInput.schema';
import { ClientPaymentOrderByRelationAggregateInputObjectSchema as ClientPaymentOrderByRelationAggregateInputObjectSchema } from './ClientPaymentOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema as SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';
import { SaleReturnOrderByRelationAggregateInputObjectSchema as SaleReturnOrderByRelationAggregateInputObjectSchema } from './SaleReturnOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isOpenAccountEnabled: SortOrderSchema.optional(),
  isBlocked: SortOrderSchema.optional(),
  creditLimit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  currentBalance: SortOrderSchema.optional(),
  contactInfo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ledgerEntries: z.lazy(() => ClientLedgerEntryOrderByRelationAggregateInputObjectSchema).optional(),
  payments: z.lazy(() => ClientPaymentOrderByRelationAggregateInputObjectSchema).optional(),
  sales: z.lazy(() => SaleOrderByRelationAggregateInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClientOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientOrderByWithRelationInput>;
export const ClientOrderByWithRelationInputObjectZodSchema = makeSchema();
