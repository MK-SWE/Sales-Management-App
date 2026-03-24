import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CartItemOrderByRelationAggregateInputObjectSchema as CartItemOrderByRelationAggregateInputObjectSchema } from './CartItemOrderByRelationAggregateInput.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
import { QuotationItemOrderByRelationAggregateInputObjectSchema as QuotationItemOrderByRelationAggregateInputObjectSchema } from './QuotationItemOrderByRelationAggregateInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema as OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { WarehouseStockOrderByRelationAggregateInputObjectSchema as WarehouseStockOrderByRelationAggregateInputObjectSchema } from './WarehouseStockOrderByRelationAggregateInput.schema';
import { WarehouseVariantSettingOrderByRelationAggregateInputObjectSchema as WarehouseVariantSettingOrderByRelationAggregateInputObjectSchema } from './WarehouseVariantSettingOrderByRelationAggregateInput.schema';
import { InventoryMovementOrderByRelationAggregateInputObjectSchema as InventoryMovementOrderByRelationAggregateInputObjectSchema } from './InventoryMovementOrderByRelationAggregateInput.schema';
import { InventoryTransferItemOrderByRelationAggregateInputObjectSchema as InventoryTransferItemOrderByRelationAggregateInputObjectSchema } from './InventoryTransferItemOrderByRelationAggregateInput.schema';
import { SaleItemOrderByRelationAggregateInputObjectSchema as SaleItemOrderByRelationAggregateInputObjectSchema } from './SaleItemOrderByRelationAggregateInput.schema';
import { SaleReturnItemOrderByRelationAggregateInputObjectSchema as SaleReturnItemOrderByRelationAggregateInputObjectSchema } from './SaleReturnItemOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  SKU: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  attributes: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  compareAtPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stock: SortOrderSchema.optional(),
  reorderStock: SortOrderSchema.optional(),
  images: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  cartItems: z.lazy(() => CartItemOrderByRelationAggregateInputObjectSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional(),
  quotationItems: z.lazy(() => QuotationItemOrderByRelationAggregateInputObjectSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema).optional(),
  warehouseStocks: z.lazy(() => WarehouseStockOrderByRelationAggregateInputObjectSchema).optional(),
  warehouseVariantSettings: z.lazy(() => WarehouseVariantSettingOrderByRelationAggregateInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementOrderByRelationAggregateInputObjectSchema).optional(),
  transferItems: z.lazy(() => InventoryTransferItemOrderByRelationAggregateInputObjectSchema).optional(),
  saleItems: z.lazy(() => SaleItemOrderByRelationAggregateInputObjectSchema).optional(),
  saleReturnItems: z.lazy(() => SaleReturnItemOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProductVariantOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductVariantOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductVariantOrderByWithRelationInput>;
export const ProductVariantOrderByWithRelationInputObjectZodSchema = makeSchema();
