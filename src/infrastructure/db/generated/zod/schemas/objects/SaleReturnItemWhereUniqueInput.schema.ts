import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SaleReturnItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.SaleReturnItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SaleReturnItemWhereUniqueInput>;
export const SaleReturnItemWhereUniqueInputObjectZodSchema = makeSchema();
