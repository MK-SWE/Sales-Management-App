import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './objects/SaleItemSelect.schema';
import { SaleItemCreateManyInputObjectSchema as SaleItemCreateManyInputObjectSchema } from './objects/SaleItemCreateManyInput.schema';

export const SaleItemCreateManyAndReturnSchema: z.ZodType<Prisma.SaleItemCreateManyAndReturnArgs> = z.object({ select: SaleItemSelectObjectSchema.optional(), data: z.union([ SaleItemCreateManyInputObjectSchema, z.array(SaleItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleItemCreateManyAndReturnArgs>;

export const SaleItemCreateManyAndReturnZodSchema = z.object({ select: SaleItemSelectObjectSchema.optional(), data: z.union([ SaleItemCreateManyInputObjectSchema, z.array(SaleItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();