import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryUpdateWithoutClientInputObjectSchema as ClientLedgerEntryUpdateWithoutClientInputObjectSchema } from './ClientLedgerEntryUpdateWithoutClientInput.schema';
import { ClientLedgerEntryUncheckedUpdateWithoutClientInputObjectSchema as ClientLedgerEntryUncheckedUpdateWithoutClientInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateWithoutClientInput.schema';
import { ClientLedgerEntryCreateWithoutClientInputObjectSchema as ClientLedgerEntryCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateWithoutClientInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientLedgerEntryUpdateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedUpdateWithoutClientInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema)])
}).strict();
export const ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInput>;
export const ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
