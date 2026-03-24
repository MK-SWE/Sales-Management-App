import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReturnStatusSchema } from '../enums/ReturnStatus.schema'

const makeSchema = () => z.object({
  set: ReturnStatusSchema.optional()
}).strict();
export const EnumReturnStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumReturnStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumReturnStatusFieldUpdateOperationsInput>;
export const EnumReturnStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
