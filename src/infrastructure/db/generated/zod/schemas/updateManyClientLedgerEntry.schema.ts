import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntryUpdateManyMutationInputObjectSchema as ClientLedgerEntryUpdateManyMutationInputObjectSchema } from './objects/ClientLedgerEntryUpdateManyMutationInput.schema';
import { ClientLedgerEntryWhereInputObjectSchema as ClientLedgerEntryWhereInputObjectSchema } from './objects/ClientLedgerEntryWhereInput.schema';

export const ClientLedgerEntryUpdateManySchema: z.ZodType<Prisma.ClientLedgerEntryUpdateManyArgs> = z.object({ data: ClientLedgerEntryUpdateManyMutationInputObjectSchema, where: ClientLedgerEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateManyArgs>;

export const ClientLedgerEntryUpdateManyZodSchema = z.object({ data: ClientLedgerEntryUpdateManyMutationInputObjectSchema, where: ClientLedgerEntryWhereInputObjectSchema.optional() }).strict();