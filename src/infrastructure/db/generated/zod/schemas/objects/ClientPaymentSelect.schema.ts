import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  paymentNumber: z.boolean().optional(),
  clientId: z.boolean().optional(),
  amount: z.boolean().optional(),
  paymentDate: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdByUserId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ClientPaymentSelectObjectSchema: z.ZodType<Prisma.ClientPaymentSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentSelect>;
export const ClientPaymentSelectObjectZodSchema = makeSchema();
