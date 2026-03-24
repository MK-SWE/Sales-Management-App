import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryCreateWithoutClientInputObjectSchema as ClientLedgerEntryCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateWithoutClientInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryCreateOrConnectWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateOrConnectWithoutClientInput>;
export const ClientLedgerEntryCreateOrConnectWithoutClientInputObjectZodSchema = makeSchema();
