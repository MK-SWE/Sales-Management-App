import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductVariantCreateimagesInputObjectSchema as ProductVariantCreateimagesInputObjectSchema } from './ProductVariantCreateimagesInput.schema';
import { QuotationItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema as QuotationItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema } from './QuotationItemUncheckedCreateNestedManyWithoutProductVariantInput.schema';
import { OrderItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutProductVariantInput.schema';
import { WarehouseStockUncheckedCreateNestedManyWithoutVariantInputObjectSchema as WarehouseStockUncheckedCreateNestedManyWithoutVariantInputObjectSchema } from './WarehouseStockUncheckedCreateNestedManyWithoutVariantInput.schema';
import { WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInputObjectSchema as WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInput.schema';
import { InventoryMovementUncheckedCreateNestedManyWithoutVariantInputObjectSchema as InventoryMovementUncheckedCreateNestedManyWithoutVariantInputObjectSchema } from './InventoryMovementUncheckedCreateNestedManyWithoutVariantInput.schema';
import { InventoryTransferItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema as InventoryTransferItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema } from './InventoryTransferItemUncheckedCreateNestedManyWithoutVariantInput.schema';
import { SaleItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema as SaleItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema } from './SaleItemUncheckedCreateNestedManyWithoutVariantInput.schema';
import { SaleReturnItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema as SaleReturnItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema } from './SaleReturnItemUncheckedCreateNestedManyWithoutVariantInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  SKU: z.string(),
  productId: z.string(),
  attributes: z.union([JsonNullValueInputSchema, jsonSchema]),
  price: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'price' must be a Decimal",
}),
  compareAtPrice: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'compareAtPrice' must be a Decimal",
}).optional().nullable(),
  stock: z.number().int().optional(),
  reorderStock: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
}).optional(),
  images: z.union([z.lazy(() => ProductVariantCreateimagesInputObjectSchema), z.string().array()]).optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  quotationItems: z.lazy(() => QuotationItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductVariantInputObjectSchema).optional(),
  warehouseStocks: z.lazy(() => WarehouseStockUncheckedCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  warehouseVariantSettings: z.lazy(() => WarehouseVariantSettingUncheckedCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementUncheckedCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  transferItems: z.lazy(() => InventoryTransferItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  saleItems: z.lazy(() => SaleItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  saleReturnItems: z.lazy(() => SaleReturnItemUncheckedCreateNestedManyWithoutVariantInputObjectSchema).optional()
}).strict();
export const ProductVariantUncheckedCreateWithoutCartItemsInputObjectSchema: z.ZodType<Prisma.ProductVariantUncheckedCreateWithoutCartItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantUncheckedCreateWithoutCartItemsInput>;
export const ProductVariantUncheckedCreateWithoutCartItemsInputObjectZodSchema = makeSchema();
