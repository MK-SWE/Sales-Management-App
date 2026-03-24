import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ClientLedgerEntryWhereUniqueInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryWhereUniqueInput>;
export const ClientLedgerEntryWhereUniqueInputObjectZodSchema = makeSchema();
