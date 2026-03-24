import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CartItemListRelationFilterObjectSchema as CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema';
import { ProductScalarRelationFilterObjectSchema as ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { QuotationItemListRelationFilterObjectSchema as QuotationItemListRelationFilterObjectSchema } from './QuotationItemListRelationFilter.schema';
import { OrderItemListRelationFilterObjectSchema as OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { WarehouseStockListRelationFilterObjectSchema as WarehouseStockListRelationFilterObjectSchema } from './WarehouseStockListRelationFilter.schema';
import { WarehouseVariantSettingListRelationFilterObjectSchema as WarehouseVariantSettingListRelationFilterObjectSchema } from './WarehouseVariantSettingListRelationFilter.schema';
import { InventoryMovementListRelationFilterObjectSchema as InventoryMovementListRelationFilterObjectSchema } from './InventoryMovementListRelationFilter.schema';
import { InventoryTransferItemListRelationFilterObjectSchema as InventoryTransferItemListRelationFilterObjectSchema } from './InventoryTransferItemListRelationFilter.schema';
import { SaleItemListRelationFilterObjectSchema as SaleItemListRelationFilterObjectSchema } from './SaleItemListRelationFilter.schema';
import { SaleReturnItemListRelationFilterObjectSchema as SaleReturnItemListRelationFilterObjectSchema } from './SaleReturnItemListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const productvariantwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductVariantWhereInputObjectSchema), z.lazy(() => ProductVariantWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductVariantWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductVariantWhereInputObjectSchema), z.lazy(() => ProductVariantWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  SKU: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  attributes: z.lazy(() => JsonFilterObjectSchema).optional(),
  price: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'price' must be a Decimal",
})]).optional(),
  compareAtPrice: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'compareAtPrice' must be a Decimal",
})]).optional().nullable(),
  stock: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reorderStock: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'reorderStock' must be a Decimal",
})]).optional(),
  images: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  cartItems: z.lazy(() => CartItemListRelationFilterObjectSchema).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional(),
  quotationItems: z.lazy(() => QuotationItemListRelationFilterObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional(),
  warehouseStocks: z.lazy(() => WarehouseStockListRelationFilterObjectSchema).optional(),
  warehouseVariantSettings: z.lazy(() => WarehouseVariantSettingListRelationFilterObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementListRelationFilterObjectSchema).optional(),
  transferItems: z.lazy(() => InventoryTransferItemListRelationFilterObjectSchema).optional(),
  saleItems: z.lazy(() => SaleItemListRelationFilterObjectSchema).optional(),
  saleReturnItems: z.lazy(() => SaleReturnItemListRelationFilterObjectSchema).optional()
}).strict();
export const ProductVariantWhereInputObjectSchema: z.ZodType<Prisma.ProductVariantWhereInput> = productvariantwhereinputSchema as unknown as z.ZodType<Prisma.ProductVariantWhereInput>;
export const ProductVariantWhereInputObjectZodSchema = productvariantwhereinputSchema;
