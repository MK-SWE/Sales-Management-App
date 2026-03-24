import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  returnNumber: z.string().optional()
}).strict();
export const SaleReturnWhereUniqueInputObjectSchema: z.ZodType<Prisma.SaleReturnWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnWhereUniqueInput>;
export const SaleReturnWhereUniqueInputObjectZodSchema = makeSchema();
