import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleCreateManyInputObjectSchema as SaleCreateManyInputObjectSchema } from './objects/SaleCreateManyInput.schema';

export const SaleCreateManySchema: z.ZodType<Prisma.SaleCreateManyArgs> = z.object({ data: z.union([ SaleCreateManyInputObjectSchema, z.array(SaleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleCreateManyArgs>;

export const SaleCreateManyZodSchema = z.object({ data: z.union([ SaleCreateManyInputObjectSchema, z.array(SaleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();