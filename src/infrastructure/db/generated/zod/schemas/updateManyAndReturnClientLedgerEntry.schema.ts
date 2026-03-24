import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryUpdateManyMutationInputObjectSchema as ClientLedgerEntryUpdateManyMutationInputObjectSchema } from './objects/ClientLedgerEntryUpdateManyMutationInput.schema';
import { ClientLedgerEntryWhereInputObjectSchema as ClientLedgerEntryWhereInputObjectSchema } from './objects/ClientLedgerEntryWhereInput.schema';

export const ClientLedgerEntryUpdateManyAndReturnSchema: z.ZodType<Prisma.ClientLedgerEntryUpdateManyAndReturnArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), data: ClientLedgerEntryUpdateManyMutationInputObjectSchema, where: ClientLedgerEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateManyAndReturnArgs>;

export const ClientLedgerEntryUpdateManyAndReturnZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), data: ClientLedgerEntryUpdateManyMutationInputObjectSchema, where: ClientLedgerEntryWhereInputObjectSchema.optional() }).strict();