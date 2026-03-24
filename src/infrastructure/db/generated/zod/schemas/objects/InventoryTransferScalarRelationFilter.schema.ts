import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferWhereInputObjectSchema as InventoryTransferWhereInputObjectSchema } from './InventoryTransferWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => InventoryTransferWhereInputObjectSchema).optional()
}).strict();
export const InventoryTransferScalarRelationFilterObjectSchema: z.ZodType<Prisma.InventoryTransferScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferScalarRelationFilter>;
export const InventoryTransferScalarRelationFilterObjectZodSchema = makeSchema();
