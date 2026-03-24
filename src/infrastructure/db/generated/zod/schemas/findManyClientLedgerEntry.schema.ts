import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './objects/ClientLedgerEntryInclude.schema';
import { ClientLedgerEntryOrderByWithRelationInputObjectSchema as ClientLedgerEntryOrderByWithRelationInputObjectSchema } from './objects/ClientLedgerEntryOrderByWithRelationInput.schema';
import { ClientLedgerEntryWhereInputObjectSchema as ClientLedgerEntryWhereInputObjectSchema } from './objects/ClientLedgerEntryWhereInput.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './objects/ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryScalarFieldEnumSchema } from './enums/ClientLedgerEntryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClientLedgerEntryFindManySelectSchema: z.ZodType<Prisma.ClientLedgerEntrySelect> = z.object({
    id: z.boolean().optional(),
    clientId: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    balanceAfter: z.boolean().optional(),
    referenceId: z.boolean().optional(),
    referenceType: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    happenedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntrySelect>;

export const ClientLedgerEntryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    clientId: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    balanceAfter: z.boolean().optional(),
    referenceId: z.boolean().optional(),
    referenceType: z.boolean().optional(),
    createdByUserId: z.boolean().optional(),
    happenedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    client: z.boolean().optional(),
    createdByUser: z.boolean().optional()
  }).strict();

export const ClientLedgerEntryFindManySchema: z.ZodType<Prisma.ClientLedgerEntryFindManyArgs> = z.object({ select: ClientLedgerEntryFindManySelectSchema.optional(), include: z.lazy(() => ClientLedgerEntryIncludeObjectSchema.optional()), orderBy: z.union([ClientLedgerEntryOrderByWithRelationInputObjectSchema, ClientLedgerEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientLedgerEntryWhereInputObjectSchema.optional(), cursor: ClientLedgerEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientLedgerEntryScalarFieldEnumSchema, ClientLedgerEntryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryFindManyArgs>;

export const ClientLedgerEntryFindManyZodSchema = z.object({ select: ClientLedgerEntryFindManySelectSchema.optional(), include: z.lazy(() => ClientLedgerEntryIncludeObjectSchema.optional()), orderBy: z.union([ClientLedgerEntryOrderByWithRelationInputObjectSchema, ClientLedgerEntryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientLedgerEntryWhereInputObjectSchema.optional(), cursor: ClientLedgerEntryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientLedgerEntryScalarFieldEnumSchema, ClientLedgerEntryScalarFieldEnumSchema.array()]).optional() }).strict();