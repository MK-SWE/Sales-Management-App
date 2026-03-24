import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemSelectObjectSchema as SaleReturnItemSelectObjectSchema } from './objects/SaleReturnItemSelect.schema';
import { SaleReturnItemCreateManyInputObjectSchema as SaleReturnItemCreateManyInputObjectSchema } from './objects/SaleReturnItemCreateManyInput.schema';

export const SaleReturnItemCreateManyAndReturnSchema: z.ZodType<Prisma.SaleReturnItemCreateManyAndReturnArgs> = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), data: z.union([ SaleReturnItemCreateManyInputObjectSchema, z.array(SaleReturnItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemCreateManyAndReturnArgs>;

export const SaleReturnItemCreateManyAndReturnZodSchema = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), data: z.union([ SaleReturnItemCreateManyInputObjectSchema, z.array(SaleReturnItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();