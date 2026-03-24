import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  orderId: z.string(),
  ProductVariantId: z.string()
}).strict();
export const OrderItemOrderIdProductVariantIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.OrderItemOrderIdProductVariantIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemOrderIdProductVariantIdCompoundUniqueInput>;
export const OrderItemOrderIdProductVariantIdCompoundUniqueInputObjectZodSchema = makeSchema();
