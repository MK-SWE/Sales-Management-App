import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './objects/ClientLedgerEntryInclude.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './objects/ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryCreateInputObjectSchema as ClientLedgerEntryCreateInputObjectSchema } from './objects/ClientLedgerEntryCreateInput.schema';
import { ClientLedgerEntryUncheckedCreateInputObjectSchema as ClientLedgerEntryUncheckedCreateInputObjectSchema } from './objects/ClientLedgerEntryUncheckedCreateInput.schema';
import { ClientLedgerEntryUpdateInputObjectSchema as ClientLedgerEntryUpdateInputObjectSchema } from './objects/ClientLedgerEntryUpdateInput.schema';
import { ClientLedgerEntryUncheckedUpdateInputObjectSchema as ClientLedgerEntryUncheckedUpdateInputObjectSchema } from './objects/ClientLedgerEntryUncheckedUpdateInput.schema';

export const ClientLedgerEntryUpsertOneSchema: z.ZodType<Prisma.ClientLedgerEntryUpsertArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema, create: z.union([ ClientLedgerEntryCreateInputObjectSchema, ClientLedgerEntryUncheckedCreateInputObjectSchema ]), update: z.union([ ClientLedgerEntryUpdateInputObjectSchema, ClientLedgerEntryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpsertArgs>;

export const ClientLedgerEntryUpsertOneZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), where: ClientLedgerEntryWhereUniqueInputObjectSchema, create: z.union([ ClientLedgerEntryCreateInputObjectSchema, ClientLedgerEntryUncheckedCreateInputObjectSchema ]), update: z.union([ ClientLedgerEntryUpdateInputObjectSchema, ClientLedgerEntryUncheckedUpdateInputObjectSchema ]) }).strict();