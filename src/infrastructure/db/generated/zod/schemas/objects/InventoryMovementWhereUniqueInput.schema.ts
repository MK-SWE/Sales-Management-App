import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const InventoryMovementWhereUniqueInputObjectSchema: z.ZodType<Prisma.InventoryMovementWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryMovementWhereUniqueInput>;
export const InventoryMovementWhereUniqueInputObjectZodSchema = makeSchema();
