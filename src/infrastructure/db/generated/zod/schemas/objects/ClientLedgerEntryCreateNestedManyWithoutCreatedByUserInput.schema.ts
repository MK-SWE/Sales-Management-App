import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectSchema as ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectSchema } from './ClientLedgerEntryCreateManyCreatedByUserInputEnvelope.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInput>;
export const ClientLedgerEntryCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
