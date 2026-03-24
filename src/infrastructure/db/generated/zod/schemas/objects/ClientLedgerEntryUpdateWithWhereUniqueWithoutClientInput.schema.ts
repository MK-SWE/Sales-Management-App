import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryUpdateWithoutClientInputObjectSchema as ClientLedgerEntryUpdateWithoutClientInputObjectSchema } from './ClientLedgerEntryUpdateWithoutClientInput.schema';
import { ClientLedgerEntryUncheckedUpdateWithoutClientInputObjectSchema as ClientLedgerEntryUncheckedUpdateWithoutClientInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientLedgerEntryUpdateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedUpdateWithoutClientInputObjectSchema)])
}).strict();
export const ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInput>;
export const ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInputObjectZodSchema = makeSchema();
