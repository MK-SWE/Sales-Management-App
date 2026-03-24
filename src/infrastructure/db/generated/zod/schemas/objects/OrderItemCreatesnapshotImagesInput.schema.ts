import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const OrderItemCreatesnapshotImagesInputObjectSchema: z.ZodType<Prisma.OrderItemCreatesnapshotImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreatesnapshotImagesInput>;
export const OrderItemCreatesnapshotImagesInputObjectZodSchema = makeSchema();
