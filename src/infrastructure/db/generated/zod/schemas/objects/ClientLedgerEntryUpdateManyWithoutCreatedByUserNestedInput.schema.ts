import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectSchema as ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectSchema } from './ClientLedgerEntryCreateManyCreatedByUserInputEnvelope.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInput.schema';
import { ClientLedgerEntryScalarWhereInputObjectSchema as ClientLedgerEntryScalarWhereInputObjectSchema } from './ClientLedgerEntryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientLedgerEntryCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema), z.lazy(() => ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientLedgerEntryScalarWhereInputObjectSchema), z.lazy(() => ClientLedgerEntryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInput>;
export const ClientLedgerEntryUpdateManyWithoutCreatedByUserNestedInputObjectZodSchema = makeSchema();
