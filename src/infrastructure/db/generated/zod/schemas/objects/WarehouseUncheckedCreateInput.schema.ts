import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInput.schema';
import { WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema as InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema } from './InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInput.schema';
import { InventoryTransferUncheckedCreateNestedManyWithoutSourceWarehouseInputObjectSchema as InventoryTransferUncheckedCreateNestedManyWithoutSourceWarehouseInputObjectSchema } from './InventoryTransferUncheckedCreateNestedManyWithoutSourceWarehouseInput.schema';
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
  stocks: z.lazy(() => WarehouseStockUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  variantSettings: z.lazy(() => WarehouseVariantSettingUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  movements: z.lazy(() => InventoryMovementUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  transfersOut: z.lazy(() => InventoryTransferUncheckedCreateNestedManyWithoutSourceWarehouseInputObjectSchema).optional(),
  transfersIn: z.lazy(() => InventoryTransferUncheckedCreateNestedManyWithoutDestWarehouseInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUncheckedCreateNestedManyWithoutWarehouseInputObjectSchema).optional()
}).strict();
export const WarehouseUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WarehouseUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUncheckedCreateInput>;
export const WarehouseUncheckedCreateInputObjectZodSchema = makeSchema();
