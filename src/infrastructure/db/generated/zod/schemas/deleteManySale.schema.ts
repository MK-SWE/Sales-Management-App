import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';

export const SaleDeleteManySchema: z.ZodType<Prisma.SaleDeleteManyArgs> = z.object({ where: SaleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleDeleteManyArgs>;

export const SaleDeleteManyZodSchema = z.object({ where: SaleWhereInputObjectSchema.optional() }).strict();