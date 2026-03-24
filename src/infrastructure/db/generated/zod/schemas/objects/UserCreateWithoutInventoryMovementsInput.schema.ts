import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { QuotationCreateNestedManyWithoutUserInputObjectSchema as QuotationCreateNestedManyWithoutUserInputObjectSchema } from './QuotationCreateNestedManyWithoutUserInput.schema';
import { AddressCreateNestedManyWithoutUserInputObjectSchema as AddressCreateNestedManyWithoutUserInputObjectSchema } from './AddressCreateNestedManyWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
import { CartCreateNestedOneWithoutUserInputObjectSchema as CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema';
import { InventoryTransferCreateNestedManyWithoutCreatedByUserInputObjectSchema as InventoryTransferCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './InventoryTransferCreateNestedManyWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInput.schema';
import { ClientPaymentCreateNestedManyWithoutCreatedByUserInputObjectSchema as ClientPaymentCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './ClientPaymentCreateNestedManyWithoutCreatedByUserInput.schema';
import { SaleCreateNestedManyWithoutCreatedByUserInputObjectSchema as SaleCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './SaleCreateNestedManyWithoutCreatedByUserInput.schema';
import { SaleReturnCreateNestedManyWithoutCreatedByUserInputObjectSchema as SaleReturnCreateNestedManyWithoutCreatedByUserInputObjectSchema } from './SaleReturnCreateNestedManyWithoutCreatedByUserInput.schema';
import { AuditLogCreateNestedManyWithoutUserInputObjectSchema as AuditLogCreateNestedManyWithoutUserInputObjectSchema } from './AuditLogCreateNestedManyWithoutUserInput.schema'

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
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  quotations: z.lazy(() => QuotationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  addresses: z.lazy(() => AddressCreateNestedManyWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema).optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema).optional(),
  inventoryTransfers: z.lazy(() => InventoryTransferCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  clientLedgerEntries: z.lazy(() => ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  clientPayments: z.lazy(() => ClientPaymentCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  sales: z.lazy(() => SaleCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnCreateNestedManyWithoutCreatedByUserInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutInventoryMovementsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutInventoryMovementsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutInventoryMovementsInput>;
export const UserCreateWithoutInventoryMovementsInputObjectZodSchema = makeSchema();
