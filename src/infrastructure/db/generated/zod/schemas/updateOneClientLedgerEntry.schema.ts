import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryIncludeObjectSchema as ClientLedgerEntryIncludeObjectSchema } from './objects/ClientLedgerEntryInclude.schema';
import { ClientLedgerEntryUpdateInputObjectSchema as ClientLedgerEntryUpdateInputObjectSchema } from './objects/ClientLedgerEntryUpdateInput.schema';
import { ClientLedgerEntryUncheckedUpdateInputObjectSchema as ClientLedgerEntryUncheckedUpdateInputObjectSchema } from './objects/ClientLedgerEntryUncheckedUpdateInput.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './objects/ClientLedgerEntryWhereUniqueInput.schema';

export const ClientLedgerEntryUpdateOneSchema: z.ZodType<Prisma.ClientLedgerEntryUpdateArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), data: z.union([ClientLedgerEntryUpdateInputObjectSchema, ClientLedgerEntryUncheckedUpdateInputObjectSchema]), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateArgs>;

export const ClientLedgerEntryUpdateOneZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), include: ClientLedgerEntryIncludeObjectSchema.optional(), data: z.union([ClientLedgerEntryUpdateInputObjectSchema, ClientLedgerEntryUncheckedUpdateInputObjectSchema]), where: ClientLedgerEntryWhereUniqueInputObjectSchema }).strict();