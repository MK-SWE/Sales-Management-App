import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { SaleStatusSchema } from '../enums/SaleStatus.schema';
import { WarehouseCreateNestedOneWithoutSalesInputObjectSchema as WarehouseCreateNestedOneWithoutSalesInputObjectSchema } from './WarehouseCreateNestedOneWithoutSalesInput.schema';
import { UserCreateNestedOneWithoutSalesInputObjectSchema as UserCreateNestedOneWithoutSalesInputObjectSchema } from './UserCreateNestedOneWithoutSalesInput.schema';
import { SaleItemCreateNestedManyWithoutSaleInputObjectSchema as SaleItemCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemCreateNestedManyWithoutSaleInput.schema';
import { SaleReturnCreateNestedManyWithoutOriginalSaleInputObjectSchema as SaleReturnCreateNestedManyWithoutOriginalSaleInputObjectSchema } from './SaleReturnCreateNestedManyWithoutOriginalSaleInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  saleNumber: z.string(),
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  warehouse: z.lazy(() => WarehouseCreateNestedOneWithoutSalesInputObjectSchema),
  createdByUser: z.lazy(() => UserCreateNestedOneWithoutSalesInputObjectSchema).optional(),
  items: z.lazy(() => SaleItemCreateNestedManyWithoutSaleInputObjectSchema).optional(),
  returns: z.lazy(() => SaleReturnCreateNestedManyWithoutOriginalSaleInputObjectSchema).optional()
}).strict();
export const SaleCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.SaleCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleCreateWithoutClientInput>;
export const SaleCreateWithoutClientInputObjectZodSchema = makeSchema();
