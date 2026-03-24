import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnSelectObjectSchema as SaleReturnSelectObjectSchema } from './objects/SaleReturnSelect.schema';
import { SaleReturnCreateManyInputObjectSchema as SaleReturnCreateManyInputObjectSchema } from './objects/SaleReturnCreateManyInput.schema';

export const SaleReturnCreateManyAndReturnSchema: z.ZodType<Prisma.SaleReturnCreateManyAndReturnArgs> = z.object({ select: SaleReturnSelectObjectSchema.optional(), data: z.union([ SaleReturnCreateManyInputObjectSchema, z.array(SaleReturnCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnCreateManyAndReturnArgs>;

export const SaleReturnCreateManyAndReturnZodSchema = z.object({ select: SaleReturnSelectObjectSchema.optional(), data: z.union([ SaleReturnCreateManyInputObjectSchema, z.array(SaleReturnCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();