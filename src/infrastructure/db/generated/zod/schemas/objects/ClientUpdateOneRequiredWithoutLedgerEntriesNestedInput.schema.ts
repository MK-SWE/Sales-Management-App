import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutLedgerEntriesInputObjectSchema as ClientCreateWithoutLedgerEntriesInputObjectSchema } from './ClientCreateWithoutLedgerEntriesInput.schema';
import { ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema as ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema } from './ClientUncheckedCreateWithoutLedgerEntriesInput.schema';
import { ClientCreateOrConnectWithoutLedgerEntriesInputObjectSchema as ClientCreateOrConnectWithoutLedgerEntriesInputObjectSchema } from './ClientCreateOrConnectWithoutLedgerEntriesInput.schema';
import { ClientUpsertWithoutLedgerEntriesInputObjectSchema as ClientUpsertWithoutLedgerEntriesInputObjectSchema } from './ClientUpsertWithoutLedgerEntriesInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateToOneWithWhereWithoutLedgerEntriesInputObjectSchema as ClientUpdateToOneWithWhereWithoutLedgerEntriesInputObjectSchema } from './ClientUpdateToOneWithWhereWithoutLedgerEntriesInput.schema';
import { ClientUpdateWithoutLedgerEntriesInputObjectSchema as ClientUpdateWithoutLedgerEntriesInputObjectSchema } from './ClientUpdateWithoutLedgerEntriesInput.schema';
import { ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema as ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema } from './ClientUncheckedUpdateWithoutLedgerEntriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutLedgerEntriesInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutLedgerEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientUpdateToOneWithWhereWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUpdateWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUncheckedUpdateWithoutLedgerEntriesInputObjectSchema)]).optional()
}).strict();
export const ClientUpdateOneRequiredWithoutLedgerEntriesNestedInputObjectSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutLedgerEntriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutLedgerEntriesNestedInput>;
export const ClientUpdateOneRequiredWithoutLedgerEntriesNestedInputObjectZodSchema = makeSchema();
