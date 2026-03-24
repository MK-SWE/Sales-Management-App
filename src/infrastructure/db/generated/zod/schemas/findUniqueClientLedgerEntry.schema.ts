import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './objects/ClientLedgerEntryInclude.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './objects/ClientLedgerEntryWhereUniqueInput.schema';

export const ClientLedgerEntryFindUniqueSchema: z.ZodType<Prisma.ClientLedgerEntryFindUniqueArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryFindUniqueArgs>;

export const ClientLedgerEntryFindUniqueZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict();