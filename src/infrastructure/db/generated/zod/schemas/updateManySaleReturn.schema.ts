import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnUpdateManyMutationInputObjectSchema as SaleReturnUpdateManyMutationInputObjectSchema } from './objects/SaleReturnUpdateManyMutationInput.schema';
import { SaleReturnWhereInputObjectSchema as SaleReturnWhereInputObjectSchema } from './objects/SaleReturnWhereInput.schema';

export const SaleReturnUpdateManySchema: z.ZodType<Prisma.SaleReturnUpdateManyArgs> = z.object({ data: SaleReturnUpdateManyMutationInputObjectSchema, where: SaleReturnWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnUpdateManyArgs>;

export const SaleReturnUpdateManyZodSchema = z.object({ data: SaleReturnUpdateManyMutationInputObjectSchema, where: SaleReturnWhereInputObjectSchema.optional() }).strict();