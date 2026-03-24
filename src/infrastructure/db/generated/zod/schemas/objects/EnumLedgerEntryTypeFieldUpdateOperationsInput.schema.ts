import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LedgerEntryTypeSchema } from '../enums/LedgerEntryType.schema'

const makeSchema = () => z.object({
  set: LedgerEntryTypeSchema.optional()
}).strict();
export const EnumLedgerEntryTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumLedgerEntryTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumLedgerEntryTypeFieldUpdateOperationsInput>;
export const EnumLedgerEntryTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
