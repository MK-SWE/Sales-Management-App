import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleStatusSchema } from '../enums/SaleStatus.schema'

const nestedenumsalestatusfilterSchema = z.object({
  equals: SaleStatusSchema.optional(),
  in: SaleStatusSchema.array().optional(),
  notIn: SaleStatusSchema.array().optional(),
  not: z.union([SaleStatusSchema, z.lazy(() => NestedEnumSaleStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSaleStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumSaleStatusFilter> = nestedenumsalestatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSaleStatusFilter>;
export const NestedEnumSaleStatusFilterObjectZodSchema = nestedenumsalestatusfilterSchema;
