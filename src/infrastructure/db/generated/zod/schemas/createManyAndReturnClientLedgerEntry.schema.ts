import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntrySelectObjectSchema as ClientLedgerEntrySelectObjectSchema } from './objects/ClientLedgerEntrySelect.schema';
import { ClientLedgerEntryCreateManyInputObjectSchema as ClientLedgerEntryCreateManyInputObjectSchema } from './objects/ClientLedgerEntryCreateManyInput.schema';

export const ClientLedgerEntryCreateManyAndReturnSchema: z.ZodType<Prisma.ClientLedgerEntryCreateManyAndReturnArgs> = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), data: z.union([ ClientLedgerEntryCreateManyInputObjectSchema, z.array(ClientLedgerEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateManyAndReturnArgs>;

export const ClientLedgerEntryCreateManyAndReturnZodSchema = z.object({ select: ClientLedgerEntrySelectObjectSchema.optional(), data: z.union([ ClientLedgerEntryCreateManyInputObjectSchema, z.array(ClientLedgerEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();