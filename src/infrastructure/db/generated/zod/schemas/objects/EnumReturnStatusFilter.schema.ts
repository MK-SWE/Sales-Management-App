import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema';
import { NestedEnumReturnStatusFilterObjectSchema as NestedEnumReturnStatusFilterObjectSchema } from './NestedEnumReturnStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ReturnStatusSchema.optional(),
  in: ReturnStatusSchema.array().optional(),
  notIn: ReturnStatusSchema.array().optional(),
  not: z.union([ReturnStatusSchema, z.lazy(() => NestedEnumReturnStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumReturnStatusFilterObjectSchema: z.ZodType<Prisma.EnumReturnStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReturnStatusFilter>;
export const EnumReturnStatusFilterObjectZodSchema = makeSchema();
