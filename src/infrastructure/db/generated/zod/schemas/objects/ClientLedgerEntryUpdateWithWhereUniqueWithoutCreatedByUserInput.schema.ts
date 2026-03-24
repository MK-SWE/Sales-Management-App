import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryUpdateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUpdateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUpdateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientLedgerEntryUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
