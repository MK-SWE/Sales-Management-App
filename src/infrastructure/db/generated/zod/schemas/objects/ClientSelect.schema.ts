import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryFindManySchema as ClientLedgerEntryFindManySchema } from '../findManyClientLedgerEntry.schema';
import { ClientPaymentFindManySchema as ClientPaymentFindManySchema } from '../findManyClientPayment.schema';
import { SaleFindManySchema as SaleFindManySchema } from '../findManySale.schema';
import { SaleReturnFindManySchema as SaleReturnFindManySchema } from '../findManySaleReturn.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  isOpenAccountEnabled: z.boolean().optional(),
  isBlocked: z.boolean().optional(),
  creditLimit: z.boolean().optional(),
  currentBalance: z.boolean().optional(),
  contactInfo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ledgerEntries: z.union([z.boolean(), z.lazy(() => ClientLedgerEntryFindManySchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => ClientPaymentFindManySchema)]).optional(),
  sales: z.union([z.boolean(), z.lazy(() => SaleFindManySchema)]).optional(),
  saleReturns: z.union([z.boolean(), z.lazy(() => SaleReturnFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientSelectObjectSchema: z.ZodType<Prisma.ClientSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientSelect>;
export const ClientSelectObjectZodSchema = makeSchema();
