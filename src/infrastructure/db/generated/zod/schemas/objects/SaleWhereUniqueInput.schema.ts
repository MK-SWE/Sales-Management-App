import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  saleNumber: z.string().optional()
}).strict();
export const SaleWhereUniqueInputObjectSchema: z.ZodType<Prisma.SaleWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleWhereUniqueInput>;
export const SaleWhereUniqueInputObjectZodSchema = makeSchema();
