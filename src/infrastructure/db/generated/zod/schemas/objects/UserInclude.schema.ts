import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { QuotationFindManySchema as QuotationFindManySchema } from '../findManyQuotation.schema';
import { AddressFindManySchema as AddressFindManySchema } from '../findManyAddress.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { InventoryMovementFindManySchema as InventoryMovementFindManySchema } from '../findManyInventoryMovement.schema';
import { InventoryTransferFindManySchema as InventoryTransferFindManySchema } from '../findManyInventoryTransfer.schema';
import { ClientLedgerEntryFindManySchema as ClientLedgerEntryFindManySchema } from '../findManyClientLedgerEntry.schema';
import { ClientPaymentFindManySchema as ClientPaymentFindManySchema } from '../findManyClientPayment.schema';
import { SaleFindManySchema as SaleFindManySchema } from '../findManySale.schema';
import { SaleReturnFindManySchema as SaleReturnFindManySchema } from '../findManySaleReturn.schema';
import { AuditLogFindManySchema as AuditLogFindManySchema } from '../findManyAuditLog.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  quotations: z.union([z.boolean(), z.lazy(() => QuotationFindManySchema)]).optional(),
  addresses: z.union([z.boolean(), z.lazy(() => AddressFindManySchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  inventoryMovements: z.union([z.boolean(), z.lazy(() => InventoryMovementFindManySchema)]).optional(),
  inventoryTransfers: z.union([z.boolean(), z.lazy(() => InventoryTransferFindManySchema)]).optional(),
  clientLedgerEntries: z.union([z.boolean(), z.lazy(() => ClientLedgerEntryFindManySchema)]).optional(),
  clientPayments: z.union([z.boolean(), z.lazy(() => ClientPaymentFindManySchema)]).optional(),
  sales: z.union([z.boolean(), z.lazy(() => SaleFindManySchema)]).optional(),
  saleReturns: z.union([z.boolean(), z.lazy(() => SaleReturnFindManySchema)]).optional(),
  auditLogs: z.union([z.boolean(), z.lazy(() => AuditLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
