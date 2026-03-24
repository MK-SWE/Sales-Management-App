import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInputObjectSchema as InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInput.schema';
import { SaleUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as SaleUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutWarehouseInput.schema';
import { SaleReturnUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as SaleReturnUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './SaleReturnUncheckedCreateNestedManyWithoutWarehouseInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stocks: z.lazy(() => WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  variantSettings: z.lazy(() => WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  movements: z.lazy(() => InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  transfersIn: z.lazy(() => InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional()
}).strict();
export const WarehouseUncheckedCreateWithoutTransfersOutInputObjectSchema: z.ZodType<Prisma.WarehouseUncheckedCreateWithoutTransfersOutInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUncheckedCreateWithoutTransfersOutInput>;
export const WarehouseUncheckedCreateWithoutTransfersOutInputObjectZodSchema = makeSchema();
