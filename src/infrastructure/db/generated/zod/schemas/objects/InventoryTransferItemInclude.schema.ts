import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferArgsObjectSchema as InventoryTransferArgsObjectSchema } from './InventoryTransferArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  transfer: z.union([z.boolean(), z.lazy(() => InventoryTransferArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const InventoryTransferItemIncludeObjectSchema: z.ZodType<Prisma.InventoryTransferItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemInclude>;
export const InventoryTransferItemIncludeObjectZodSchema = makeSchema();
