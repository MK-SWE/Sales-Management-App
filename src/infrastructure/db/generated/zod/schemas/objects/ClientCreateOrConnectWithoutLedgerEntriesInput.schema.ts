import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutLedgerEntriesInputObjectSchema as ClientCreateWithoutLedgerEntriesInputObjectSchema } from './ClientCreateWithoutLedgerEntriesInput.schema';
import { ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema as ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema } from './ClientUncheckedCreateWithoutLedgerEntriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientCreateWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema)])
}).strict();
export const ClientCreateOrConnectWithoutLedgerEntriesInputObjectSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateOrConnectWithoutLedgerEntriesInput>;
export const ClientCreateOrConnectWithoutLedgerEntriesInputObjectZodSchema = makeSchema();
