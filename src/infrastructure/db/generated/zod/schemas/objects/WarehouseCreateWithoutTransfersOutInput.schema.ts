import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseStockCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseStockCreateNestedManyWithoutWarehouseInput.schema';
import { WarehouseVariantSettingCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseVariantSettingCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryMovementCreateNestedManyWithoutWarehouseInputObjectSchema as InventoryMovementCreateNestedManyWithoutWarehouseInputObjectSchema } from './InventoryMovementCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryTransferCreateNestedManyWithoutDestWarehouseInputObjectSchema as InventoryTransferCreateNestedManyWithoutDestWarehouseInputObjectSchema } from './InventoryTransferCreateNestedManyWithoutDestWarehouseInput.schema';
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
  transfersIn: z.lazy(() => InventoryTransferCreateNestedManyWithoutDestWarehouseInputObjectSchema).optional(),
  sales: z.lazy(() => SaleCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnCreateNestedManyWithoutWarehouseInputObjectSchema).optional()
}).strict();
export const WarehouseCreateWithoutTransfersOutInputObjectSchema: z.ZodType<Prisma.WarehouseCreateWithoutTransfersOutInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateWithoutTransfersOutInput>;
export const WarehouseCreateWithoutTransfersOutInputObjectZodSchema = makeSchema();
