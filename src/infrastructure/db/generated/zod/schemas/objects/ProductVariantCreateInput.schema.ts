import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ProductVariantCreateimagesInputObjectSchema as ProductVariantCreateimagesInputObjectSchema } from './ProductVariantCreateimagesInput.schema';
import { CartItemCreateNestedManyWithoutProductVariantInputObjectSchema as CartItemCreateNestedManyWithoutProductVariantInputObjectSchema } from './CartItemCreateNestedManyWithoutProductVariantInput.schema';
import { ProductCreateNestedOneWithoutProductVariantsInputObjectSchema as ProductCreateNestedOneWithoutProductVariantsInputObjectSchema } from './ProductCreateNestedOneWithoutProductVariantsInput.schema';
import { QuotationItemCreateNestedManyWithoutProductVariantInputObjectSchema as QuotationItemCreateNestedManyWithoutProductVariantInputObjectSchema } from './QuotationItemCreateNestedManyWithoutProductVariantInput.schema';
import { OrderItemCreateNestedManyWithoutProductVariantInputObjectSchema as OrderItemCreateNestedManyWithoutProductVariantInputObjectSchema } from './OrderItemCreateNestedManyWithoutProductVariantInput.schema';
import { WarehouseStockCreateNestedManyWithoutVariantInputObjectSchema as WarehouseStockCreateNestedManyWithoutVariantInputObjectSchema } from './WarehouseStockCreateNestedManyWithoutVariantInput.schema';
import { WarehouseVariantSettingCreateNestedManyWithoutVariantInputObjectSchema as WarehouseVariantSettingCreateNestedManyWithoutVariantInputObjectSchema } from './WarehouseVariantSettingCreateNestedManyWithoutVariantInput.schema';
import { InventoryMovementCreateNestedManyWithoutVariantInputObjectSchema as InventoryMovementCreateNestedManyWithoutVariantInputObjectSchema } from './InventoryMovementCreateNestedManyWithoutVariantInput.schema';
import { InventoryTransferItemCreateNestedManyWithoutVariantInputObjectSchema as InventoryTransferItemCreateNestedManyWithoutVariantInputObjectSchema } from './InventoryTransferItemCreateNestedManyWithoutVariantInput.schema';
import { SaleItemCreateNestedManyWithoutVariantInputObjectSchema as SaleItemCreateNestedManyWithoutVariantInputObjectSchema } from './SaleItemCreateNestedManyWithoutVariantInput.schema';
import { SaleReturnItemCreateNestedManyWithoutVariantInputObjectSchema as SaleReturnItemCreateNestedManyWithoutVariantInputObjectSchema } from './SaleReturnItemCreateNestedManyWithoutVariantInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  SKU: z.string(),
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
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductVariantInputObjectSchema).optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutProductVariantsInputObjectSchema),
  quotationItems: z.lazy(() => QuotationItemCreateNestedManyWithoutProductVariantInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductVariantInputObjectSchema).optional(),
  warehouseStocks: z.lazy(() => WarehouseStockCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  warehouseVariantSettings: z.lazy(() => WarehouseVariantSettingCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  transferItems: z.lazy(() => InventoryTransferItemCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  saleItems: z.lazy(() => SaleItemCreateNestedManyWithoutVariantInputObjectSchema).optional(),
  saleReturnItems: z.lazy(() => SaleReturnItemCreateNestedManyWithoutVariantInputObjectSchema).optional()
}).strict();
export const ProductVariantCreateInputObjectSchema: z.ZodType<Prisma.ProductVariantCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCreateInput>;
export const ProductVariantCreateInputObjectZodSchema = makeSchema();
