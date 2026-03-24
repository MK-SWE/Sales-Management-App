import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferArgsObjectSchema as InventoryTransferArgsObjectSchema } from './InventoryTransferArgs.schema';
import { ProductVariantArgsObjectSchema as ProductVariantArgsObjectSchema } from './ProductVariantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  transferId: z.boolean().optional(),
  variantId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  transfer: z.union([z.boolean(), z.lazy(() => InventoryTransferArgsObjectSchema)]).optional(),
  variant: z.union([z.boolean(), z.lazy(() => ProductVariantArgsObjectSchema)]).optional()
}).strict();
export const InventoryTransferItemSelectObjectSchema: z.ZodType<Prisma.InventoryTransferItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemSelect>;
export const InventoryTransferItemSelectObjectZodSchema = makeSchema();
