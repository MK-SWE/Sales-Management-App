import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './objects/SaleSelect.schema';
import { SaleCreateManyInputObjectSchema as SaleCreateManyInputObjectSchema } from './objects/SaleCreateManyInput.schema';

export const SaleCreateManyAndReturnSchema: z.ZodType<Prisma.SaleCreateManyAndReturnArgs> = z.object({ select: SaleSelectObjectSchema.optional(), data: z.union([ SaleCreateManyInputObjectSchema, z.array(SaleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaleCreateManyAndReturnArgs>;

export const SaleCreateManyAndReturnZodSchema = z.object({ select: SaleSelectObjectSchema.optional(), data: z.union([ SaleCreateManyInputObjectSchema, z.array(SaleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();