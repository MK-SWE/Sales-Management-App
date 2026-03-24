import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateWithoutClientInputObjectSchema as ClientLedgerEntryCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateWithoutClientInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutClientInput.schema';
import { ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema as ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateOrConnectWithoutClientInput.schema';
import { ClientLedgerEntryCreateManyClientInputEnvelopeObjectSchema as ClientLedgerEntryCreateManyClientInputEnvelopeObjectSchema } from './ClientLedgerEntryCreateManyClientInputEnvelope.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientLedgerEntryCreateManyClientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientLedgerEntryUncheckedCreateNestedManyWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUncheckedCreateNestedManyWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUncheckedCreateNestedManyWithoutClientInput>;
export const ClientLedgerEntryUncheckedCreateNestedManyWithoutClientInputObjectZodSchema = makeSchema();
