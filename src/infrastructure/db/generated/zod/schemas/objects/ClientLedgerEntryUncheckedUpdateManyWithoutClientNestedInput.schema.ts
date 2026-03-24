import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryCreateWithoutClientInputObjectSchema as ClientLedgerEntryCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateWithoutClientInput.schema';
import { ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema as ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema } from './ClientLedgerEntryUncheckedCreateWithoutClientInput.schema';
import { ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema as ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema } from './ClientLedgerEntryCreateOrConnectWithoutClientInput.schema';
import { ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInputObjectSchema as ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInput.schema';
import { ClientLedgerEntryCreateManyClientInputEnvelopeObjectSchema as ClientLedgerEntryCreateManyClientInputEnvelopeObjectSchema } from './ClientLedgerEntryCreateManyClientInputEnvelope.schema';
import { ClientLedgerEntryWhereUniqueInputObjectSchema as ClientLedgerEntryWhereUniqueInputObjectSchema } from './ClientLedgerEntryWhereUniqueInput.schema';
import { ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInputObjectSchema as ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInput.schema';
import { ClientLedgerEntryUpdateManyWithWhereWithoutClientInputObjectSchema as ClientLedgerEntryUpdateManyWithWhereWithoutClientInputObjectSchema } from './ClientLedgerEntryUpdateManyWithWhereWithoutClientInput.schema';
import { ClientLedgerEntryScalarWhereInputObjectSchema as ClientLedgerEntryScalarWhereInputObjectSchema } from './ClientLedgerEntryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientLedgerEntryCreateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateWithoutClientInputObjectSchema).array(), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedCreateWithoutClientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryCreateOrConnectWithoutClientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUpsertWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientLedgerEntryCreateManyClientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema), z.lazy(() => ClientLedgerEntryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUpdateWithWhereUniqueWithoutClientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClientLedgerEntryUpdateManyWithWhereWithoutClientInputObjectSchema), z.lazy(() => ClientLedgerEntryUpdateManyWithWhereWithoutClientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClientLedgerEntryScalarWhereInputObjectSchema), z.lazy(() => ClientLedgerEntryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInput>;
export const ClientLedgerEntryUncheckedUpdateManyWithoutClientNestedInputObjectZodSchema = makeSchema();
