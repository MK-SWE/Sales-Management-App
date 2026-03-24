import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema as AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { QuotationListRelationFilterObjectSchema as QuotationListRelationFilterObjectSchema } from './QuotationListRelationFilter.schema';
import { AddressListRelationFilterObjectSchema as AddressListRelationFilterObjectSchema } from './AddressListRelationFilter.schema';
import { OrderListRelationFilterObjectSchema as OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema';
import { CartNullableScalarRelationFilterObjectSchema as CartNullableScalarRelationFilterObjectSchema } from './CartNullableScalarRelationFilter.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { InventoryMovementListRelationFilterObjectSchema as InventoryMovementListRelationFilterObjectSchema } from './InventoryMovementListRelationFilter.schema';
import { InventoryTransferListRelationFilterObjectSchema as InventoryTransferListRelationFilterObjectSchema } from './InventoryTransferListRelationFilter.schema';
import { ClientLedgerEntryListRelationFilterObjectSchema as ClientLedgerEntryListRelationFilterObjectSchema } from './ClientLedgerEntryListRelationFilter.schema';
import { ClientPaymentListRelationFilterObjectSchema as ClientPaymentListRelationFilterObjectSchema } from './ClientPaymentListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema as SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';
import { SaleReturnListRelationFilterObjectSchema as SaleReturnListRelationFilterObjectSchema } from './SaleReturnListRelationFilter.schema';
import { AuditLogListRelationFilterObjectSchema as AuditLogListRelationFilterObjectSchema } from './AuditLogListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema]).optional(),
  isBanned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  banReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  quotations: z.lazy(() => QuotationListRelationFilterObjectSchema).optional(),
  addresses: z.lazy(() => AddressListRelationFilterObjectSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional(),
  cart: z.union([z.lazy(() => CartNullableScalarRelationFilterObjectSchema), z.lazy(() => CartWhereInputObjectSchema)]).optional(),
  inventoryMovements: z.lazy(() => InventoryMovementListRelationFilterObjectSchema).optional(),
  inventoryTransfers: z.lazy(() => InventoryTransferListRelationFilterObjectSchema).optional(),
  clientLedgerEntries: z.lazy(() => ClientLedgerEntryListRelationFilterObjectSchema).optional(),
  clientPayments: z.lazy(() => ClientPaymentListRelationFilterObjectSchema).optional(),
  sales: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  saleReturns: z.lazy(() => SaleReturnListRelationFilterObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
