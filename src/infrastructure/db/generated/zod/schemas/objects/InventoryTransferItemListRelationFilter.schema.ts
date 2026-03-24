import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereInputObjectSchema as InventoryTransferItemWhereInputObjectSchema } from './InventoryTransferItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => InventoryTransferItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => InventoryTransferItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => InventoryTransferItemWhereInputObjectSchema).optional()
}).strict();
export const InventoryTransferItemListRelationFilterObjectSchema: z.ZodType<Prisma.InventoryTransferItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemListRelationFilter>;
export const InventoryTransferItemListRelationFilterObjectZodSchema = makeSchema();
