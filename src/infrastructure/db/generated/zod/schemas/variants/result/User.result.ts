import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    role: RoleSchema,
    isBanned: z.boolean(),
    banReason: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    quotations: z.array(z.unknown()),
    addresses: z.array(z.unknown()),
    orders: z.array(z.unknown()),
    cart: z.unknown().nullable(),
    inventoryMovements: z.array(z.unknown()),
    inventoryTransfers: z.array(z.unknown()),
    clientLedgerEntries: z.array(z.unknown()),
    clientPayments: z.array(z.unknown()),
    sales: z.array(z.unknown()),
    saleReturns: z.array(z.unknown()),
    auditLogs: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
