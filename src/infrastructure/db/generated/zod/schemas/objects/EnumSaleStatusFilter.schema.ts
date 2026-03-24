import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleStatusSchema } from '../enums/SaleStatus.schema';
import { NestedEnumSaleStatusFilterObjectSchema as NestedEnumSaleStatusFilterObjectSchema } from './NestedEnumSaleStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SaleStatusSchema.optional(),
  in: SaleStatusSchema.array().optional(),
  notIn: SaleStatusSchema.array().optional(),
  not: z.union([SaleStatusSchema, z.lazy(() => NestedEnumSaleStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumSaleStatusFilterObjectSchema: z.ZodType<Prisma.EnumSaleStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSaleStatusFilter>;
export const EnumSaleStatusFilterObjectZodSchema = makeSchema();
