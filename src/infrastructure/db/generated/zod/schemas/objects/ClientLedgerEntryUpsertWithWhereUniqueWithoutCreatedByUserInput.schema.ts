import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryUpdateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUpdateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUpdateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientLedgerEntryUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
