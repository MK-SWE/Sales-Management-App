import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryTransferItemWhereInputObjectSchema as InventoryTransferItemWhereInputObjectSchema } from './InventoryTransferItemWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InventoryTransferItemWhereInputObjectSchema).optional()
}).strict();
export const ProductVariantCountOutputTypeCountTransferItemsArgsObjectSchema = makeSchema();
export const ProductVariantCountOutputTypeCountTransferItemsArgsObjectZodSchema = makeSchema();
