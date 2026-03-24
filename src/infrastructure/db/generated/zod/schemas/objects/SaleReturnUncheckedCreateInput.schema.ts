import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema';
import { SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInputObjectSchema as SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInputObjectSchema } from './SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  returnNumber: z.string(),
  originalSaleId: z.string().optional().nullable(),
  warehouseId: z.string(),
  clientId: z.string().optional().nullable(),
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
  createdByUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => SaleReturnItemUncheckedCreateNestedManyWithoutSaleReturnInputObjectSchema).optional()
}).strict();
export const SaleReturnUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SaleReturnUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnUncheckedCreateInput>;
export const SaleReturnUncheckedCreateInputObjectZodSchema = makeSchema();
