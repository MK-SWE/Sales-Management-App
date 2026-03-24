import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { QuotationUncheckedCreateNestedManyWithoutUserInputObjectSchema as QuotationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './QuotationUncheckedCreateNestedManyWithoutUserInput.schema';
import { AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema as AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AddressUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { CartUncheckedCreateNestedOneWithoutUserInputObjectSchema as CartUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedOneWithoutUserInput.schema';
import { InventoryMovementUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema as InventoryMovementUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './InventoryMovementUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { InventoryTransferUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema as InventoryTransferUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './InventoryTransferUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema as ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { SaleUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema as SaleUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutCreatedByUserInput.schema';
import { SaleReturnUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema as SaleReturnUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './SaleReturnUncheckedCreateNestedManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  isBanned: z.boolean().optional(),
  banReason: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  quotations: z.lazy(() => QuotationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  addresses: z.lazy(() => AddressUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  cart: z.lazy(() => CartUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  inventoryTransfers: z.lazy(() => InventoryTransferUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  clientLedgerEntries: z.lazy(() => ClientLedgerEntryUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  clientPayments: z.lazy(() => ClientPaymentUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAuditLogsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAuditLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
export const UserUncheckedCreateWithoutAuditLogsInputObjectZodSchema = makeSchema();
