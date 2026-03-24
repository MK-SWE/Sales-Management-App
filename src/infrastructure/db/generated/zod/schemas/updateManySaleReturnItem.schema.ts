import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemUpdateManyMutationInputObjectSchema as SaleReturnItemUpdateManyMutationInputObjectSchema } from './objects/SaleReturnItemUpdateManyMutationInput.schema';
import { SaleReturnItemWhereInputObjectSchema as SaleReturnItemWhereInputObjectSchema } from './objects/SaleReturnItemWhereInput.schema';

export const SaleReturnItemUpdateManySchema: z.ZodType<Prisma.SaleReturnItemUpdateManyArgs> = z.object({ data: SaleReturnItemUpdateManyMutationInputObjectSchema, where: SaleReturnItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateManyArgs>;

export const SaleReturnItemUpdateManyZodSchema = z.object({ data: SaleReturnItemUpdateManyMutationInputObjectSchema, where: SaleReturnItemWhereInputObjectSchema.optional() }).strict();