import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TransferStatusSchema } from '../enums/TransferStatus.schema';
import { EnumTransferStatusFieldUpdateOperationsInputObjectSchema as EnumTransferStatusFieldUpdateOperationsInputObjectSchema } from './EnumTransferStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WarehouseUpdateOneRequiredWithoutTransfersOutNestedInputObjectSchema as WarehouseUpdateOneRequiredWithoutTransfersOutNestedInputObjectSchema } from './WarehouseUpdateOneRequiredWithoutTransfersOutNestedInput.schema';
import { UserUpdateOneWithoutInventoryTransfersNestedInputObjectSchema as UserUpdateOneWithoutInventoryTransfersNestedInputObjectSchema } from './UserUpdateOneWithoutInventoryTransfersNestedInput.schema';
import { InventoryTransferItemUpdateManyWithoutTransferNestedInputObjectSchema as InventoryTransferItemUpdateManyWithoutTransferNestedInputObjectSchema } from './InventoryTransferItemUpdateManyWithoutTransferNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  transferNumber: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([TransferStatusSchema, z.lazy(() => EnumTransferStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  transferredAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sourceWarehouse: z.lazy(() => WarehouseUpdateOneRequiredWithoutTransfersOutNestedInputObjectSchema).optional(),
  createdByUser: z.lazy(() => UserUpdateOneWithoutInventoryTransfersNestedInputObjectSchema).optional(),
  items: z.lazy(() => InventoryTransferItemUpdateManyWithoutTransferNestedInputObjectSchema).optional()
}).strict();
export const InventoryTransferUpdateWithoutDestWarehouseInputObjectSchema: z.ZodType<Prisma.InventoryTransferUpdateWithoutDestWarehouseInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferUpdateWithoutDestWarehouseInput>;
export const InventoryTransferUpdateWithoutDestWarehouseInputObjectZodSchema = makeSchema();
