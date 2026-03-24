import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema'

const nestedenumtransferstatusfilterSchema = z.object({
  equals: TransferStatusSchema.optional(),
  in: TransferStatusSchema.array().optional(),
  notIn: TransferStatusSchema.array().optional(),
  not: z.union([TransferStatusSchema, z.lazy(() => NestedEnumTransferStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTransferStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumTransferStatusFilter> = nestedenumtransferstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTransferStatusFilter>;
export const NestedEnumTransferStatusFilterObjectZodSchema = nestedenumtransferstatusfilterSchema;
