import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema as WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema } from './WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInput.schema';
import { WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema as WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema } from './WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInput.schema';
import { InventoryMovementUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema as InventoryMovementUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema } from './InventoryMovementUncheckedUpdateManyWithoutWarehouseNestedInput.schema';
import { InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseNestedInputObjectSchema as InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseNestedInputObjectSchema } from './InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseNestedInput.schema';
import { InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInputObjectSchema as InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInputObjectSchema } from './InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema as SaleUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutWarehouseNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  stocks: z.lazy(() => WarehouseStockUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema).optional(),
  variantSettings: z.lazy(() => WarehouseVariantSettingUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema).optional(),
  movements: z.lazy(() => InventoryMovementUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema).optional(),
  transfersOut: z.lazy(() => InventoryTransferUncheckedUpdateManyWithoutSourceWarehouseNestedInputObjectSchema).optional(),
  transfersIn: z.lazy(() => InventoryTransferUncheckedUpdateManyWithoutDestWarehouseNestedInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUncheckedUpdateManyWithoutWarehouseNestedInputObjectSchema).optional()
}).strict();
export const WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectSchema: z.ZodType<Prisma.WarehouseUncheckedUpdateWithoutSaleReturnsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUncheckedUpdateWithoutSaleReturnsInput>;
export const WarehouseUncheckedUpdateWithoutSaleReturnsInputObjectZodSchema = makeSchema();
