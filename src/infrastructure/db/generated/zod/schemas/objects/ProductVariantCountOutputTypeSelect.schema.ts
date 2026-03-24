import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantCountOutputTypeCountCartItemsArgsObjectSchema as ProductVariantCountOutputTypeCountCartItemsArgsObjectSchema } from './ProductVariantCountOutputTypeCountCartItemsArgs.schema';
import { ProductVariantCountOutputTypeCountQuotationItemsArgsObjectSchema as ProductVariantCountOutputTypeCountQuotationItemsArgsObjectSchema } from './ProductVariantCountOutputTypeCountQuotationItemsArgs.schema';
import { ProductVariantCountOutputTypeCountOrderItemsArgsObjectSchema as ProductVariantCountOutputTypeCountOrderItemsArgsObjectSchema } from './ProductVariantCountOutputTypeCountOrderItemsArgs.schema';
import { ProductVariantCountOutputTypeCountWarehouseStocksArgsObjectSchema as ProductVariantCountOutputTypeCountWarehouseStocksArgsObjectSchema } from './ProductVariantCountOutputTypeCountWarehouseStocksArgs.schema';
import { ProductVariantCountOutputTypeCountWarehouseVariantSettingsArgsObjectSchema as ProductVariantCountOutputTypeCountWarehouseVariantSettingsArgsObjectSchema } from './ProductVariantCountOutputTypeCountWarehouseVariantSettingsArgs.schema';
import { ProductVariantCountOutputTypeCountInventoryMovementsArgsObjectSchema as ProductVariantCountOutputTypeCountInventoryMovementsArgsObjectSchema } from './ProductVariantCountOutputTypeCountInventoryMovementsArgs.schema';
import { ProductVariantCountOutputTypeCountTransferItemsArgsObjectSchema as ProductVariantCountOutputTypeCountTransferItemsArgsObjectSchema } from './ProductVariantCountOutputTypeCountTransferItemsArgs.schema';
import { ProductVariantCountOutputTypeCountSaleItemsArgsObjectSchema as ProductVariantCountOutputTypeCountSaleItemsArgsObjectSchema } from './ProductVariantCountOutputTypeCountSaleItemsArgs.schema';
import { ProductVariantCountOutputTypeCountSaleReturnItemsArgsObjectSchema as ProductVariantCountOutputTypeCountSaleReturnItemsArgsObjectSchema } from './ProductVariantCountOutputTypeCountSaleReturnItemsArgs.schema'

const makeSchema = () => z.object({
  cartItems: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountCartItemsArgsObjectSchema)]).optional(),
  quotationItems: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountQuotationItemsArgsObjectSchema)]).optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountOrderItemsArgsObjectSchema)]).optional(),
  warehouseStocks: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountWarehouseStocksArgsObjectSchema)]).optional(),
  warehouseVariantSettings: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountWarehouseVariantSettingsArgsObjectSchema)]).optional(),
  inventoryMovements: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountInventoryMovementsArgsObjectSchema)]).optional(),
  transferItems: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountTransferItemsArgsObjectSchema)]).optional(),
  saleItems: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountSaleItemsArgsObjectSchema)]).optional(),
  saleReturnItems: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeCountSaleReturnItemsArgsObjectSchema)]).optional()
}).strict();
export const ProductVariantCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductVariantCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantCountOutputTypeSelect>;
export const ProductVariantCountOutputTypeSelectObjectZodSchema = makeSchema();
