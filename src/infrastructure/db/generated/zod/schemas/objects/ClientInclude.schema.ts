import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryFindManySchema as ClientLedgerEntryFindManySchema } from '../findManyClientLedgerEntry.schema';
import { ClientPaymentFindManySchema as ClientPaymentFindManySchema } from '../findManyClientPayment.schema';
import { SaleFindManySchema as SaleFindManySchema } from '../findManySale.schema';
import { SaleReturnFindManySchema as SaleReturnFindManySchema } from '../findManySaleReturn.schema';
import { ClientCountOutputTypeArgsObjectSchema as ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  ledgerEntries: z.union([z.boolean(), z.lazy(() => ClientLedgerEntryFindManySchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => ClientPaymentFindManySchema)]).optional(),
  sales: z.union([z.boolean(), z.lazy(() => SaleFindManySchema)]).optional(),
  saleReturns: z.union([z.boolean(), z.lazy(() => SaleReturnFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientIncludeObjectSchema: z.ZodType<Prisma.ClientInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientInclude>;
export const ClientIncludeObjectZodSchema = makeSchema();
