import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const QuotationWhereUniqueInputObjectSchema: z.ZodType<Prisma.QuotationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationWhereUniqueInput>;
export const QuotationWhereUniqueInputObjectZodSchema = makeSchema();
