import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { QuotationUncheckedUpdateManyWithoutUserNestedInputObjectSchema as QuotationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './QuotationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AddressUncheckedUpdateManyWithoutUserNestedInput.schema';
import { OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema as OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema as CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './CartUncheckedUpdateOneWithoutUserNestedInput.schema';
import { InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema as InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema as InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema as ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { ClientPaymentUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema as ClientPaymentUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './ClientPaymentUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema as SaleUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema as SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from './SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema';
import { AuditLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AuditLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AuditLogUncheckedUpdateManyWithoutUserNestedInput.schema'

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
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  quotations: z.lazy(() => QuotationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  addresses: z.lazy(() => AddressUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  cart: z.lazy(() => CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  inventoryTransfers: z.lazy(() => InventoryTransferUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  clientLedgerEntries: z.lazy(() => ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  clientPayments: z.lazy(() => ClientPaymentUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectZodSchema = makeSchema();
