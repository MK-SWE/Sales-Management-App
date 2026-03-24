import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { SaleReturnUpdateOneRequiredWithoutItemsNestedInputObjectSchema as SaleReturnUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './SaleReturnUpdateOneRequiredWithoutItemsNestedInput.schema';
import { ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInputObjectSchema as ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInputObjectSchema } from './ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'quantity' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  refundPrice: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'refundPrice' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  lineTotal: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'lineTotal' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  saleReturn: z.lazy(() => SaleReturnUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantUpdateOneRequiredWithoutSaleReturnItemsNestedInputObjectSchema).optional()
}).strict();
export const SaleReturnItemUpdateInputObjectSchema: z.ZodType<Prisma.SaleReturnItemUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateInput>;
export const SaleReturnItemUpdateInputObjectZodSchema = makeSchema();
