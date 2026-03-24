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
import { CartItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema as CartItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductVariantNestedInput.schema';
import { QuotationItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema as QuotationItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema } from './QuotationItemUncheckedUpdateManyWithoutProductVariantNestedInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema as OrderItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductVariantNestedInput.schema';
import { WarehouseStockUncheckedUpdateManyWithoutVariantNestedInputObjectSchema as WarehouseStockUncheckedUpdateManyWithoutVariantNestedInputObjectSchema } from './WarehouseStockUncheckedUpdateManyWithoutVariantNestedInput.schema';
import { WarehouseVariantSettingUncheckedUpdateManyWithoutVariantNestedInputObjectSchema as WarehouseVariantSettingUncheckedUpdateManyWithoutVariantNestedInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateManyWithoutVariantNestedInput.schema';
import { InventoryMovementUncheckedUpdateManyWithoutVariantNestedInputObjectSchema as InventoryMovementUncheckedUpdateManyWithoutVariantNestedInputObjectSchema } from './InventoryMovementUncheckedUpdateManyWithoutVariantNestedInput.schema';
import { SaleItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema as SaleItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema } from './SaleItemUncheckedUpdateManyWithoutVariantNestedInput.schema';
import { SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema as SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema } from './SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SKU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  cartItems: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema).optional(),
  quotationItems: z.lazy(() => QuotationItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductVariantNestedInputObjectSchema).optional(),
  warehouseStocks: z.lazy(() => WarehouseStockUncheckedUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  warehouseVariantSettings: z.lazy(() => WarehouseVariantSettingUncheckedUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementUncheckedUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  saleItems: z.lazy(() => SaleItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema).optional(),
  saleReturnItems: z.lazy(() => SaleReturnItemUncheckedUpdateManyWithoutVariantNestedInputObjectSchema).optional()
}).strict();
export const ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUncheckedUpdateWithoutTransferItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUncheckedUpdateWithoutTransferItemsInput>;
export const ProductVariantUncheckedUpdateWithoutTransferItemsInputObjectZodSchema = makeSchema();
