import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './objects/SaleReturnWhereInput.schema';

export const SaleReturnDeleteManySchema: z.ZodType<Prisma.SaleReturnDeleteManyArgs> = z.object({ where: SaleReturnWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnDeleteManyArgs>;

export const SaleReturnDeleteManyZodSchema = z.object({ where: SaleReturnWhereInputObjectSchema.optional() }).strict();