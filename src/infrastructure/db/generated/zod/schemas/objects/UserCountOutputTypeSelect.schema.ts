import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountQuotationsArgsObjectSchema as UserCountOutputTypeCountQuotationsArgsObjectSchema } from './UserCountOutputTypeCountQuotationsArgs.schema';
import { UserCountOutputTypeCountAddressesArgsObjectSchema as UserCountOutputTypeCountAddressesArgsObjectSchema } from './UserCountOutputTypeCountAddressesArgs.schema';
import { UserCountOutputTypeCountOrdersArgsObjectSchema as UserCountOutputTypeCountOrdersArgsObjectSchema } from './UserCountOutputTypeCountOrdersArgs.schema';
import { UserCountOutputTypeCountInventoryMovementsArgsObjectSchema as UserCountOutputTypeCountInventoryMovementsArgsObjectSchema } from './UserCountOutputTypeCountInventoryMovementsArgs.schema';
import { UserCountOutputTypeCountInventoryTransfersArgsObjectSchema as UserCountOutputTypeCountInventoryTransfersArgsObjectSchema } from './UserCountOutputTypeCountInventoryTransfersArgs.schema';
import { UserCountOutputTypeCountClientLedgerEntriesArgsObjectSchema as UserCountOutputTypeCountClientLedgerEntriesArgsObjectSchema } from './UserCountOutputTypeCountClientLedgerEntriesArgs.schema';
import { UserCountOutputTypeCountClientPaymentsArgsObjectSchema as UserCountOutputTypeCountClientPaymentsArgsObjectSchema } from './UserCountOutputTypeCountClientPaymentsArgs.schema';
import { UserCountOutputTypeCountSalesArgsObjectSchema as UserCountOutputTypeCountSalesArgsObjectSchema } from './UserCountOutputTypeCountSalesArgs.schema';
import { UserCountOutputTypeCountSaleReturnsArgsObjectSchema as UserCountOutputTypeCountSaleReturnsArgsObjectSchema } from './UserCountOutputTypeCountSaleReturnsArgs.schema';
import { UserCountOutputTypeCountAuditLogsArgsObjectSchema as UserCountOutputTypeCountAuditLogsArgsObjectSchema } from './UserCountOutputTypeCountAuditLogsArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  quotations: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountQuotationsArgsObjectSchema)]).optional(),
  addresses: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAddressesArgsObjectSchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrdersArgsObjectSchema)]).optional(),
  inventoryMovements: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountInventoryMovementsArgsObjectSchema)]).optional(),
  inventoryTransfers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountInventoryTransfersArgsObjectSchema)]).optional(),
  clientLedgerEntries: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountClientLedgerEntriesArgsObjectSchema)]).optional(),
  clientPayments: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountClientPaymentsArgsObjectSchema)]).optional(),
  sales: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSalesArgsObjectSchema)]).optional(),
  saleReturns: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSaleReturnsArgsObjectSchema)]).optional(),
  auditLogs: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAuditLogsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
