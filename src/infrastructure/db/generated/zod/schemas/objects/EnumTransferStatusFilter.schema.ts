import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { NestedEnumTransferStatusFilterObjectSchema as NestedEnumTransferStatusFilterObjectSchema } from './NestedEnumTransferStatusFilter.schema'

const makeSchema = () => z.object({
  equals: TransferStatusSchema.optional(),
  in: TransferStatusSchema.array().optional(),
  notIn: TransferStatusSchema.array().optional(),
  not: z.union([TransferStatusSchema, z.lazy(() => NestedEnumTransferStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumTransferStatusFilterObjectSchema: z.ZodType<Prisma.EnumTransferStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTransferStatusFilter>;
export const EnumTransferStatusFilterObjectZodSchema = makeSchema();
