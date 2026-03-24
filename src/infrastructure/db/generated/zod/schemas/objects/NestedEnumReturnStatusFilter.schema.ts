import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema'

const nestedenumreturnstatusfilterSchema = z.object({
  equals: ReturnStatusSchema.optional(),
  in: ReturnStatusSchema.array().optional(),
  notIn: ReturnStatusSchema.array().optional(),
  not: z.union([ReturnStatusSchema, z.lazy(() => NestedEnumReturnStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumReturnStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumReturnStatusFilter> = nestedenumreturnstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReturnStatusFilter>;
export const NestedEnumReturnStatusFilterObjectZodSchema = nestedenumreturnstatusfilterSchema;
