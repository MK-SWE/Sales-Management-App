import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryScalarWhereInputObjectSchema as ClientLedgerEntryScalarWhereInputObjectSchema } from './ClientLedgerEntryScalarWhereInput.schema';
import { ClientLedgerEntryUpdateManyMutationInputObjectSchema as ClientLedgerEntryUpdateManyMutationInputObjectSchema } from './ClientLedgerEntryUpdateManyMutationInput.schema';
import { ClientLedgerEntryUncheckedUpdateManyWithoutClientInputObjectSchema as ClientLedgerEntryUncheckedUpdateManyWithoutClientInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientLedgerEntryUpdateManyMutationInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedUpdateManyWithoutClientInputObjectSchema)])
}).strict();
export const ClientLedgerEntryUpdateManyWithWhereWithoutClientInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUpdateManyWithWhereWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateManyWithWhereWithoutClientInput>;
export const ClientLedgerEntryUpdateManyWithWhereWithoutClientInputObjectZodSchema = makeSchema();
