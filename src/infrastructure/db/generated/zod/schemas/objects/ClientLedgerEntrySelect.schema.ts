import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  clientId: z.boolean().optional(),
  type: z.boolean().optional(),
  amount: z.boolean().optional(),
  balanceAfter: z.boolean().optional(),
  referenceId: z.boolean().optional(),
  referenceType: z.boolean().optional(),
  createdByUserId: z.boolean().optional(),
  happenedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ClientLedgerEntrySelectObjectSchema: z.ZodType<Prisma.ClientLedgerEntrySelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntrySelect>;
export const ClientLedgerEntrySelectObjectZodSchema = makeSchema();
