import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const InventoryTransferItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemWhereUniqueInput>;
export const InventoryTransferItemWhereUniqueInputObjectZodSchema = makeSchema();
