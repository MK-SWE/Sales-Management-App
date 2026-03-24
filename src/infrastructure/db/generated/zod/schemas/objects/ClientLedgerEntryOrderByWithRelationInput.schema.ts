import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  balanceAfter: SortOrderSchema.optional(),
  referenceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdByUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  happenedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ClientLedgerEntryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryOrderByWithRelationInput>;
export const ClientLedgerEntryOrderByWithRelationInputObjectZodSchema = makeSchema();
