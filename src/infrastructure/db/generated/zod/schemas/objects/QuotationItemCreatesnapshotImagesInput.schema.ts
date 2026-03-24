import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const QuotationItemCreatesnapshotImagesInputObjectSchema: z.ZodType<Prisma.QuotationItemCreatesnapshotImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.QuotationItemCreatesnapshotImagesInput>;
export const QuotationItemCreatesnapshotImagesInputObjectZodSchema = makeSchema();
