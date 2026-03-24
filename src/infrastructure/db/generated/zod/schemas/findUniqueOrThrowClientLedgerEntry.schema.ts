import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './objects/ClientLedgerEntryInclude.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './objects/ClientLedgerEntryWhereUniqueInput.schema';

export const ClientLedgerEntryFindUniqueOrThrowSchema: z.ZodType<Prisma.ClientLedgerEntryFindUniqueOrThrowArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryFindUniqueOrThrowArgs>;

export const ClientLedgerEntryFindUniqueOrThrowZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict();