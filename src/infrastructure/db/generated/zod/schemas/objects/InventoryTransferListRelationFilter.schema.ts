import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './InventoryTransferWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional(),
  some: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional(),
  none: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional()
}).strict();
export const InventoryTransferListRelationFilterObjectSchema: z.ZodType<Prisma.InventoryTransferListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferListRelationFilter>;
export const InventoryTransferListRelationFilterObjectZodSchema = makeSchema();
