import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseStockCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateNestedManyWithoutWarehouseInput.schema';
import { WarehouseVariantSettingCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryMovementCreateNestedManyWithoutWarehouseInputObjectSchema as InventoryMovementCreateNestedManyWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryTransferCreateNestedManyWithoutSourceWarehouseInputObjectSchema as InventoryTransferCreateNestedManyWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferCreateNestedManyWithoutSourceWarehouseInput.schema';
import { SaleCreateNestedManyWithoutWarehouseInputObjectSchema as SaleCreateNestedManyWithoutWarehouseInputObjectSchema } from './SaleCreateNestedManyWithoutWarehouseInput.schema';
import { SaleReturnCreateNestedManyWithoutWarehouseInputObjectSchema as SaleReturnCreateNestedManyWithoutWarehouseInputObjectSchema } from './SaleReturnCreateNestedManyWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stocks: z.lazy(() => WarehouseStockCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  variantSettings: z.lazy(() => WarehouseVariantSettingCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  movements: z.lazy(() => InventoryMovementCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  transfersOut: z.lazy(() => InventoryTransferCreateNestedManyWithoutSourceWarehouseInputObjectSchema).optional(),
  sales: z.lazy(() => SaleCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnCreateNestedManyWithoutWarehouseInputObjectSchema).optional()
}).strict();
export const WarehouseCreateWithoutTransfersInInputObjectSchema: z.ZodType<Prisma.WarehouseCreateWithoutTransfersInInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateWithoutTransfersInInput>;
export const WarehouseCreateWithoutTransfersInInputObjectZodSchema = makeSchema();
