import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WarehouseStockUpdateManyWithoutWarehouseNestedInputObjectSchema as WarehouseStockUpdateManyWithoutWarehouseNestedInputObjectSchema } from './WarehouseStockUpdateManyWithoutWarehouseNestedInput.schema';
import { InventoryMovementUpdateManyWithoutWarehouseNestedInputObjectSchema as InventoryMovementUpdateManyWithoutWarehouseNestedInputObjectSchema } from './InventoryMovementUpdateManyWithoutWarehouseNestedInput.schema';
import { InventoryTransferUpdateManyWithoutSourceWarehouseNestedInputObjectSchema as InventoryTransferUpdateManyWithoutSourceWarehouseNestedInputObjectSchema } from './InventoryTransferUpdateManyWithoutSourceWarehouseNestedInput.schema';
import { InventoryTransferUpdateManyWithoutDestWarehouseNestedInputObjectSchema as InventoryTransferUpdateManyWithoutDestWarehouseNestedInputObjectSchema } from './InventoryTransferUpdateManyWithoutDestWarehouseNestedInput.schema';
import { SaleUpdateManyWithoutWarehouseNestedInputObjectSchema as SaleUpdateManyWithoutWarehouseNestedInputObjectSchema } from './SaleUpdateManyWithoutWarehouseNestedInput.schema';
import { SaleReturnUpdateManyWithoutWarehouseNestedInputObjectSchema as SaleReturnUpdateManyWithoutWarehouseNestedInputObjectSchema } from './SaleReturnUpdateManyWithoutWarehouseNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  stocks: z.lazy(() => WarehouseStockUpdateManyWithoutWarehouseNestedInputObjectSchema).optional(),
  movements: z.lazy(() => InventoryMovementUpdateManyWithoutWarehouseNestedInputObjectSchema).optional(),
  transfersOut: z.lazy(() => InventoryTransferUpdateManyWithoutSourceWarehouseNestedInputObjectSchema).optional(),
  transfersIn: z.lazy(() => InventoryTransferUpdateManyWithoutDestWarehouseNestedInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUpdateManyWithoutWarehouseNestedInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUpdateManyWithoutWarehouseNestedInputObjectSchema).optional()
}).strict();
export const WarehouseUpdateWithoutVariantSettingsInputObjectSchema: z.ZodType<Prisma.WarehouseUpdateWithoutVariantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseUpdateWithoutVariantSettingsInput>;
export const WarehouseUpdateWithoutVariantSettingsInputObjectZodSchema = makeSchema();
