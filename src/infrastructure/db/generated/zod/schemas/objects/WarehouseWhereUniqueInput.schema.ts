import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().optional()
}).strict();
export const WarehouseWhereUniqueInputObjectSchema: z.ZodType<Prisma.WarehouseWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseWhereUniqueInput>;
export const WarehouseWhereUniqueInputObjectZodSchema = makeSchema();
