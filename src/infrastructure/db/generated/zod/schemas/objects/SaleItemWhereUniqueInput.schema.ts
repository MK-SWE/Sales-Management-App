import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SaleItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.SaleItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleItemWhereUniqueInput>;
export const SaleItemWhereUniqueInputObjectZodSchema = makeSchema();
