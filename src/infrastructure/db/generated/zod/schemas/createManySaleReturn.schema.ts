import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnCreateManyInputObjectSchema as SaleReturnCreateManyInputObjectSchema } from './objects/SaleReturnCreateManyInput.schema';

export const SaleReturnCreateManySchema: z.ZodType<Prisma.SaleReturnCreateManyArgs> = z.object({ data: z.union([ SaleReturnCreateManyInputObjectSchema, z.array(SaleReturnCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnCreateManyArgs>;

export const SaleReturnCreateManyZodSchema = z.object({ data: z.union([ SaleReturnCreateManyInputObjectSchema, z.array(SaleReturnCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();