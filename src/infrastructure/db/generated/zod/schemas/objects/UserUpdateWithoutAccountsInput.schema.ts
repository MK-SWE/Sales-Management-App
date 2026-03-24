import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema as SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { QuotationUpdateManyWithoutUserNestedInputObjectSchema as QuotationUpdateManyWithoutUserNestedInputObjectSchema } from './QuotationUpdateManyWithoutUserNestedInput.schema';
import { AddressUpdateManyWithoutUserNestedInputObjectSchema as AddressUpdateManyWithoutUserNestedInputObjectSchema } from './AddressUpdateManyWithoutUserNestedInput.schema';
import { OrderUpdateManyWithoutUserNestedInputObjectSchema as OrderUpdateManyWithoutUserNestedInputObjectSchema } from './OrderUpdateManyWithoutUserNestedInput.schema';
import { CartUpdateOneWithoutUserNestedInputObjectSchema as CartUpdateOneWithoutUserNestedInputObjectSchema } from './CartUpdateOneWithoutUserNestedInput.schema';
import { InventoryMovementUpdateManyWithoutCreatedByUserNestedInputObjectSchema as InventoryMovementUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './InventoryMovementUpdateManyWithoutCreatedByUserNestedInput.schema';
import { InventoryTransferUpdateManyWithoutCreatedByUserNestedInputObjectSchema as InventoryTransferUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './InventoryTransferUpdateManyWithoutCreatedByUserNestedInput.schema';
import { ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInputObjectSchema as ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInput.schema';
import { ClientPaymentUpdateManyWithoutCreatedByUserNestedInputObjectSchema as ClientPaymentUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './ClientPaymentUpdateManyWithoutCreatedByUserNestedInput.schema';
import { SaleUpdateManyWithoutCreatedByUserNestedInputObjectSchema as SaleUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './SaleUpdateManyWithoutCreatedByUserNestedInput.schema';
import { SaleReturnUpdateManyWithoutCreatedByUserNestedInputObjectSchema as SaleReturnUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './SaleReturnUpdateManyWithoutCreatedByUserNestedInput.schema';
import { AuditLogUpdateManyWithoutUserNestedInputObjectSchema as AuditLogUpdateManyWithoutUserNestedInputObjectSchema } from './AuditLogUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  isBanned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  banReason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  quotations: z.lazy(() => QuotationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  addresses: z.lazy(() => AddressUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  cart: z.lazy(() => CartUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  inventoryTransfers: z.lazy(() => InventoryTransferUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  clientLedgerEntries: z.lazy(() => ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  clientPayments: z.lazy(() => ClientPaymentUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutAccountsInput>;
export const UserUpdateWithoutAccountsInputObjectZodSchema = makeSchema();
