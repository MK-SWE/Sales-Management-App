import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().optional()
}).strict();
export const ClientWhereUniqueInputObjectSchema: z.ZodType<Prisma.ClientWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientWhereUniqueInput>;
export const ClientWhereUniqueInputObjectZodSchema = makeSchema();
