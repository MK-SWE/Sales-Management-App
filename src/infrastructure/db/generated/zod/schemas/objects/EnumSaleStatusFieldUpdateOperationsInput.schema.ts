import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SaleStatusSchema } from '../enums/SaleStatus.schema'

const makeSchema = () => z.object({
  set: SaleStatusSchema.optional()
}).strict();
export const EnumSaleStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSaleStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSaleStatusFieldUpdateOperationsInput>;
export const EnumSaleStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
