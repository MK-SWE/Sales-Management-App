import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema as AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { QuotationOrderByRelationAggregateInputObjectSchema as QuotationOrderByRelationAggregateInputObjectSchema } from './QuotationOrderByRelationAggregateInput.schema';
import { AddressOrderByRelationAggregateInputObjectSchema as AddressOrderByRelationAggregateInputObjectSchema } from './AddressOrderByRelationAggregateInput.schema';
import { OrderOrderByRelationAggregateInputObjectSchema as OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';
import { CartOrderByWithRelationInputObjectSchema as CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema';
import { InventoryMovementOrderByRelationAggregateInputObjectSchema as InventoryMovementOrderByRelationAggregateInputObjectSchema } from './InventoryMovementOrderByRelationAggregateInput.schema';
import { InventoryTransferOrderByRelationAggregateInputObjectSchema as InventoryTransferOrderByRelationAggregateInputObjectSchema } from './InventoryTransferOrderByRelationAggregateInput.schema';
import { ClientLedgerEntryOrderByRelationAggregateInputObjectSchema as ClientLedgerEntryOrderByRelationAggregateInputObjectSchema } from './ClientLedgerEntryOrderByRelationAggregateInput.schema';
import { ClientPaymentOrderByRelationAggregateInputObjectSchema as ClientPaymentOrderByRelationAggregateInputObjectSchema } from './ClientPaymentOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema as SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';
import { SaleReturnOrderByRelationAggregateInputObjectSchema as SaleReturnOrderByRelationAggregateInputObjectSchema } from './SaleReturnOrderByRelationAggregateInput.schema';
import { AuditLogOrderByRelationAggregateInputObjectSchema as AuditLogOrderByRelationAggregateInputObjectSchema } from './AuditLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  firstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  role: SortOrderSchema.optional(),
  isBanned: SortOrderSchema.optional(),
  banReason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  quotations: z.lazy(() => QuotationOrderByRelationAggregateInputObjectSchema).optional(),
  addresses: z.lazy(() => AddressOrderByRelationAggregateInputObjectSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputObjectSchema).optional(),
  cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementOrderByRelationAggregateInputObjectSchema).optional(),
  inventoryTransfers: z.lazy(() => InventoryTransferOrderByRelationAggregateInputObjectSchema).optional(),
  clientLedgerEntries: z.lazy(() => ClientLedgerEntryOrderByRelationAggregateInputObjectSchema).optional(),
  clientPayments: z.lazy(() => ClientPaymentOrderByRelationAggregateInputObjectSchema).optional(),
  sales: z.lazy(() => SaleOrderByRelationAggregateInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnOrderByRelationAggregateInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
