import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemCreateManyInputObjectSchema as SaleReturnItemCreateManyInputObjectSchema } from './objects/SaleReturnItemCreateManyInput.schema';

export const SaleReturnItemCreateManySchema: z.ZodType<Prisma.SaleReturnItemCreateManyArgs> = z.object({ data: z.union([ SaleReturnItemCreateManyInputObjectSchema, z.array(SaleReturnItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemCreateManyArgs>;

export const SaleReturnItemCreateManyZodSchema = z.object({ data: z.union([ SaleReturnItemCreateManyInputObjectSchema, z.array(SaleReturnItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();