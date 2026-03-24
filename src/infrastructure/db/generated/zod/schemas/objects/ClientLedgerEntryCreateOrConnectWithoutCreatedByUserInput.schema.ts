import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInput>;
export const ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
