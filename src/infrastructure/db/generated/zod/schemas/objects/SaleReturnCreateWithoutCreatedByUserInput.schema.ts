import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema';
import { SaleCreateNestedOneWithoutReturnsInputObjectSchema as SaleCreateNestedOneWithoutReturnsInputObjectSchema } from './SaleCreateNestedOneWithoutReturnsInput.schema';
import { WarehouseCreateNestedOneWithoutSaleReturnsInputObjectSchema as WarehouseCreateNestedOneWithoutSaleReturnsInputObjectSchema } from './WarehouseCreateNestedOneWithoutSaleReturnsInput.schema';
import { ClientCreateNestedOneWithoutSaleReturnsInputObjectSchema as ClientCreateNestedOneWithoutSaleReturnsInputObjectSchema } from './ClientCreateNestedOneWithoutSaleReturnsInput.schema';
import { SaleReturnItemCreateNestedManyWithoutSaleReturnInputObjectSchema as SaleReturnItemCreateNestedManyWithoutSaleReturnInputObjectSchema } from './SaleReturnItemCreateNestedManyWithoutSaleReturnInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  returnNumber: z.string(),
  status: ReturnStatusSchema.optional(),
  subtotal: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'subtotal' must be a Decimal",
}).optional(),
  grandTotal: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'grandTotal' must be a Decimal",
}).optional(),
  notes: z.string().optional().nullable(),
  returnedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  originalSale: z.lazy(() => SaleCreateNestedOneWithoutReturnsInputObjectSchema).optional(),
  warehouse: z.lazy(() => WarehouseCreateNestedOneWithoutSaleReturnsInputObjectSchema),
  client: z.lazy(() => ClientCreateNestedOneWithoutSaleReturnsInputObjectSchema).optional(),
  items: z.lazy(() => SaleReturnItemCreateNestedManyWithoutSaleReturnInputObjectSchema).optional()
}).strict();
export const SaleReturnCreateWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.SaleReturnCreateWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnCreateWithoutCreatedByUserInput>;
export const SaleReturnCreateWithoutCreatedByUserInputObjectZodSchema = makeSchema();
