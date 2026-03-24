import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientCreateWithoutLedgerEntriesInputObjectSchema as ClientCreateWithoutLedgerEntriesInputObjectSchema } from './ClientCreateWithoutLedgerEntriesInput.schema';
import { ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema as ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema } from './ClientUncheckedCreateWithoutLedgerEntriesInput.schema';
import { ClientCreateOrConnectWithoutLedgerEntriesInputObjectSchema as ClientCreateOrConnectWithoutLedgerEntriesInputObjectSchema } from './ClientCreateOrConnectWithoutLedgerEntriesInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientCreateWithoutLedgerEntriesInputObjectSchema), z.lazy(() => ClientUncheckedCreateWithoutLedgerEntriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutLedgerEntriesInputObjectSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientCreateNestedOneWithoutLedgerEntriesInputObjectSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutLedgerEntriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateNestedOneWithoutLedgerEntriesInput>;
export const ClientCreateNestedOneWithoutLedgerEntriesInputObjectZodSchema = makeSchema();
