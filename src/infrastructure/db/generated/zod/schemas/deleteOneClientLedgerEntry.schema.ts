import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './objects/ClientLedgerEntryInclude.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './objects/ClientLedgerEntryWhereUniqueInput.schema';

export const ClientLedgerEntryDeleteOneSchema: z.ZodType<Prisma.ClientLedgerEntryDeleteArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryDeleteArgs>;

export const ClientLedgerEntryDeleteOneZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict();