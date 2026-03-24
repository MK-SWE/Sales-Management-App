import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemWhereInputObjectSchema as SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';

export const SaleItemDeleteManySchema: z.ZodType<Prisma.SaleItemDeleteManyArgs> = z.object({ where: SaleItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleItemDeleteManyArgs>;

export const SaleItemDeleteManyZodSchema = z.object({ where: SaleItemWhereInputObjectSchema.optional() }).strict();