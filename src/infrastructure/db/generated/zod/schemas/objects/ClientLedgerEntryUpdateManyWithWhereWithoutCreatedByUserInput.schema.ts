import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClientLedgerEntryScalarWhereInputObjectSchema as ClientLedgerEntryScalarWhereInputObjectSchema } from './ClientLedgerEntryScalarWhereInput.schema';
import { ClientLedgerEntryUpdateManyMutationInputObjectSchema as ClientLedgerEntryUpdateManyMutationInputObjectSchema } from './ClientLedgerEntryUpdateManyMutationInput.schema';
import { ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema as ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientLedgerEntryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientLedgerEntryUpdateManyMutationInputObjectSchema), z.lazy(() => ClientLedgerEntryUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInput>;
export const ClientLedgerEntryUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
