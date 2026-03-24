import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  transferNumber: z.string().optional()
}).strict();
export const InventoryTransferWhereUniqueInputObjectSchema: z.ZodType<Prisma.InventoryTransferWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferWhereUniqueInput>;
export const InventoryTransferWhereUniqueInputObjectZodSchema = makeSchema();
