import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InventoryTransferOrderByWithRelationInputObjectSchema as InventoryTransferOrderByWithRelationInputObjectSchema } from './InventoryTransferOrderByWithRelationInput.schema';
import { ProductVariantOrderByWithRelationInputObjectSchema as ProductVariantOrderByWithRelationInputObjectSchema } from './ProductVariantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  transferId: SortOrderSchema.optional(),
  variantId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  transfer: z.lazy(() => InventoryTransferOrderByWithRelationInputObjectSchema).optional(),
  variant: z.lazy(() => ProductVariantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const InventoryTransferItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InventoryTransferItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InventoryTransferItemOrderByWithRelationInput>;
export const InventoryTransferItemOrderByWithRelationInputObjectZodSchema = makeSchema();
