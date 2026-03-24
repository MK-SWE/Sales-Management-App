import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { SaleStatusSchema } from '../enums/SaleStatus.schema';
import { SaleItemUncheckedCreateNestedManyWithoutSaleInputObjectSchema as SaleItemUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateNestedManyWithoutSaleInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  saleNumber: z.string(),
  warehouseId: z.string(),
  clientId: z.string().optional().nullable(),
  cashClientName: z.string().optional().nullable(),
  paymentMethod: PaymentMethodSchema,
  paymentStatus: PaymentStatusSchema.optional(),
  status: SaleStatusSchema.optional(),
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
  amountPaid: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amountPaid' must be a Decimal",
}).optional(),
  amountDue: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amountDue' must be a Decimal",
}).optional(),
  notes: z.string().optional().nullable(),
  soldAt: z.coerce.date().optional().nullable(),
  createdByUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => SaleItemUncheckedCreateNestedManyWithoutSaleInputObjectSchema).optional()
}).strict();
export const SaleUncheckedCreateWithoutReturnsInputObjectSchema: z.ZodType<Prisma.SaleUncheckedCreateWithoutReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleUncheckedCreateWithoutReturnsInput>;
export const SaleUncheckedCreateWithoutReturnsInputObjectZodSchema = makeSchema();
