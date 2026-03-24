import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './objects/ClientLedgerEntryInclude.schema';
import { ClientLedgerEntryCreateInputObjectSchema as ClientLedgerEntryCreateInputObjectSchema } from './objects/ClientLedgerEntryCreateInput.schema';
import { ClientLedgerEntryUncheckedCreateInputObjectSchema as ClientLedgerEntryUncheckedCreateInputObjectSchema } from './objects/ClientLedgerEntryUncheckedCreateInput.schema';

export const ClientLedgerEntryCreateOneSchema: z.ZodType<Prisma.ClientLedgerEntryCreateArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), data: z.union([ClientLedgerEntryCreateInputObjectSchema, ClientLedgerEntryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateArgs>;

export const ClientLedgerEntryCreateOneZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), data: z.union([ClientLedgerEntryCreateInputObjectSchema, ClientLedgerEntryUncheckedCreateInputObjectSchema]) }).strict();