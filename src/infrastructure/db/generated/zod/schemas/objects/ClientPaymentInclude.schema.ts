import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientArgsObjectSchema as ClientArgsObjectSchema } from './ClientArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  client: z.union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)]).optional(),
  createdByUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ClientPaymentIncludeObjectSchema: z.ZodType<Prisma.ClientPaymentInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientPaymentInclude>;
export const ClientPaymentIncludeObjectZodSchema = makeSchema();
