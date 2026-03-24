import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntryCreateManyInputObjectSchema as ClientLedgerEntryCreateManyInputObjectSchema } from './objects/ClientLedgerEntryCreateManyInput.schema';

export const ClientLedgerEntryCreateManySchema: z.ZodType<Prisma.ClientLedgerEntryCreateManyArgs> = z.object({ data: z.union([ ClientLedgerEntryCreateManyInputObjectSchema, z.array(ClientLedgerEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateManyArgs>;

export const ClientLedgerEntryCreateManyZodSchema = z.object({ data: z.union([ ClientLedgerEntryCreateManyInputObjectSchema, z.array(ClientLedgerEntryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();