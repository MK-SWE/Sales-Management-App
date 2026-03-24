import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TransferStatusSchema } from '../enums/TransferStatus.schema'

const makeSchema = () => z.object({
  set: TransferStatusSchema.optional()
}).strict();
export const EnumTransferStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTransferStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTransferStatusFieldUpdateOperationsInput>;
export const EnumTransferStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
