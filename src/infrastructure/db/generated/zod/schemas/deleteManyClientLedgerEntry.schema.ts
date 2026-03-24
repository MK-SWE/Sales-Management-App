import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClientLedgerEntryWhereInputObjectSchema as ClientLedgerEntryWhereInputObjectSchema } from './objects/ClientLedgerEntryWhereInput.schema';

export const ClientLedgerEntryDeleteManySchema: z.ZodType<Prisma.ClientLedgerEntryDeleteManyArgs> = z.object({ where: ClientLedgerEntryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientLedgerEntryDeleteManyArgs>;

export const ClientLedgerEntryDeleteManyZodSchema = z.object({ where: ClientLedgerEntryWhereInputObjectSchema.optional() }).strict();