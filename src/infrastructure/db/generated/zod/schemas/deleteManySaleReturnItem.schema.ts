import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemWhereInputObjectSchema as SaleReturnItemWhereInputObjectSchema } from './objects/SaleReturnItemWhereInput.schema';

export const SaleReturnItemDeleteManySchema: z.ZodType<Prisma.SaleReturnItemDeleteManyArgs> = z.object({ where: SaleReturnItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemDeleteManyArgs>;

export const SaleReturnItemDeleteManyZodSchema = z.object({ where: SaleReturnItemWhereInputObjectSchema.optional() }).strict();