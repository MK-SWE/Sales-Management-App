import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemFindManySchema as CartItemFindManySchema } from '../findManyCartItem.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { QuotationItemFindManySchema as QuotationItemFindManySchema } from '../findManyQuotationItem.schema';
import { OrderItemFindManySchema as OrderItemFindManySchema } from '../findManyOrderItem.schema';
import { WarehouseStockFindManySchema as WarehouseStockFindManySchema } from '../findManyWarehouseStock.schema';
import { WarehouseVariantSettingFindManySchema as WarehouseVariantSettingFindManySchema } from '../findManyWarehouseVariantSetting.schema';
import { InventoryMovementFindManySchema as InventoryMovementFindManySchema } from '../findManyInventoryMovement.schema';
import { InventoryTransferItemFindManySchema as InventoryTransferItemFindManySchema } from '../findManyInventoryTransferItem.schema';
import { SaleItemFindManySchema as SaleItemFindManySchema } from '../findManySaleItem.schema';
import { SaleReturnItemFindManySchema as SaleReturnItemFindManySchema } from '../findManySaleReturnItem.schema';
import { ProductVariantCountOutputTypeArgsObjectSchema as ProductVariantCountOutputTypeArgsObjectSchema } from './ProductVariantCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  cartItems: z.union([z.boolean(), z.lazy(() => CartItemFindManySchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  quotationItems: z.union([z.boolean(), z.lazy(() => QuotationItemFindManySchema)]).optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => OrderItemFindManySchema)]).optional(),
  warehouseStocks: z.union([z.boolean(), z.lazy(() => WarehouseStockFindManySchema)]).optional(),
  warehouseVariantSettings: z.union([z.boolean(), z.lazy(() => WarehouseVariantSettingFindManySchema)]).optional(),
  inventoryMovements: z.union([z.boolean(), z.lazy(() => InventoryMovementFindManySchema)]).optional(),
  transferItems: z.union([z.boolean(), z.lazy(() => InventoryTransferItemFindManySchema)]).optional(),
  saleItems: z.union([z.boolean(), z.lazy(() => SaleItemFindManySchema)]).optional(),
  saleReturnItems: z.union([z.boolean(), z.lazy(() => SaleReturnItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductVariantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductVariantIncludeObjectSchema: z.ZodType<Prisma.ProductVariantInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantInclude>;
export const ProductVariantIncludeObjectZodSchema = makeSchema();
