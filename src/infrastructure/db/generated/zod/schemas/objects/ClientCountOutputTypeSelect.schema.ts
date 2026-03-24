import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCountOutputTypeCountLedgerEntriesArgsObjectSchema as ClientCountOutputTypeCountLedgerEntriesArgsObjectSchema } from './ClientCountOutputTypeCountLedgerEntriesArgs.schema';
import { ClientCountOutputTypeCountPaymentsArgsObjectSchema as ClientCountOutputTypeCountPaymentsArgsObjectSchema } from './ClientCountOutputTypeCountPaymentsArgs.schema';
import { ClientCountOutputTypeCountSalesArgsObjectSchema as ClientCountOutputTypeCountSalesArgsObjectSchema } from './ClientCountOutputTypeCountSalesArgs.schema';
import { ClientCountOutputTypeCountSaleReturnsArgsObjectSchema as ClientCountOutputTypeCountSaleReturnsArgsObjectSchema } from './ClientCountOutputTypeCountSaleReturnsArgs.schema'

const makeSchema = () => z.object({
  ledgerEntries: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountLedgerEntriesArgsObjectSchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountPaymentsArgsObjectSchema)]).optional(),
  sales: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountSalesArgsObjectSchema)]).optional(),
  saleReturns: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountSaleReturnsArgsObjectSchema)]).optional()
}).strict();
export const ClientCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountOutputTypeSelect>;
export const ClientCountOutputTypeSelectObjectZodSchema = makeSchema();
