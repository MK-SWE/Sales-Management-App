import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemCreateManyInputObjectSchema as SaleItemCreateManyInputObjectSchema } from './objects/SaleItemCreateManyInput.schema';

export const SaleItemCreateManySchema: z.ZodType<Prisma.SaleItemCreateManyArgs> = z.object({ data: z.union([ SaleItemCreateManyInputObjectSchema, z.array(SaleItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleItemCreateManyArgs>;

export const SaleItemCreateManyZodSchema = z.object({ data: z.union([ SaleItemCreateManyInputObjectSchema, z.array(SaleItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();