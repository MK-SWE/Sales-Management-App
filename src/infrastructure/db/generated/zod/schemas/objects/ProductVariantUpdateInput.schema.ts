import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductVariantUpdateimagesInputObjectSchema as ProductVariantUpdateimagesInputObjectSchema } from './ProductVariantUpdateimagesInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CartItemUpdateManyWithoutProductVariantNestedInputObjectSchema as CartItemUpdateManyWithoutProductVariantNestedInputObjectSchema } from './CartItemUpdateManyWithoutProductVariantNestedInput.schema';
import { ProductUpdateOneRequiredWithoutProductVariantsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutProductVariantsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutProductVariantsNestedInput.schema';
import { QuotationItemUpdateManyWithoutProductVariantNestedInputObjectSchema as QuotationItemUpdateManyWithoutProductVariantNestedInputObjectSchema } from './QuotationItemUpdateManyWithoutProductVariantNestedInput.schema';
import { OrderItemUpdateManyWithoutProductVariantNestedInputObjectSchema as OrderItemUpdateManyWithoutProductVariantNestedInputObjectSchema } from './OrderItemUpdateManyWithoutProductVariantNestedInput.schema';
import { WarehouseStockUpdateManyWithoutVariantNestedInputObjectSchema as WarehouseStockUpdateManyWithoutVariantNestedInputObjectSchema } from './WarehouseStockUpdateManyWithoutVariantNestedInput.schema';
import { WarehouseVariantSettingUpdateManyWithoutVariantNestedInputObjectSchema as WarehouseVariantSettingUpdateManyWithoutVariantNestedInputObjectSchema } from './WarehouseVariantSettingUpdateManyWithoutVariantNestedInput.schema';
import { InventoryMovementUpdateManyWithoutVariantNestedInputObjectSchema as InventoryMovementUpdateManyWithoutVariantNestedInputObjectSchema } from './InventoryMovementUpdateManyWithoutVariantNestedInput.schema';
import { InventoryTransferItemUpdateManyWithoutVariantNestedInputObjectSchema as InventoryTransferItemUpdateManyWithoutVariantNestedInputObjectSchema } from './InventoryTransferItemUpdateManyWithoutVariantNestedInput.schema';
import { SaleItemUpdateManyWithoutVariantNestedInputObjectSchema as SaleItemUpdateManyWithoutVariantNestedInputObjectSchema } from './SaleItemUpdateManyWithoutVariantNestedInput.schema';
import { SaleReturnItemUpdateManyWithoutVariantNestedInputObjectSchema as SaleReturnItemUpdateManyWithoutVariantNestedInputObjectSchema } from './SaleReturnItemUpdateManyWithoutVariantNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SKU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  attributes: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  price: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'price' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  compareAtPrice: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'compareAtPrice' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  stock: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  reorderStock: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  images: z.union([z.lazy(() => ProductVariantUpdateimagesInputObjectSchema), z.string().array()]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cartItems: z.lazy(() => CartItemUpdateManyWithoutProductVariantNestedInputObjectSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutProductVariantsNestedInputObjectSchema).optional(),
  quotationItems: z.lazy(() => QuotationItemUpdateManyWithoutProductVariantNestedInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductVariantNestedInputObjectSchema).optional(),
  warehouseStocks: z.lazy(() => WarehouseStockUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  warehouseVariantSettings: z.lazy(() => WarehouseVariantSettingUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  transferItems: z.lazy(() => InventoryTransferItemUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  saleItems: z.lazy(() => SaleItemUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  saleReturnItems: z.lazy(() => SaleReturnItemUpdateManyWithoutVariantNestedInputObjectSchema).optional()
}).strict();
export const ProductVariantUpdateInputObjectSchema: z.ZodType<Prisma.ProductVariantUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUpdateInput>;
export const ProductVariantUpdateInputObjectZodSchema = makeSchema();
