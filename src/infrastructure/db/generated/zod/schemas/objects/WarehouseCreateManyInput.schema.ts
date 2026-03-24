import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WarehouseCreateManyInputObjectSchema: z.ZodType<Prisma.WarehouseCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WarehouseCreateManyInput>;
export const WarehouseCreateManyInputObjectZodSchema = makeSchema();
