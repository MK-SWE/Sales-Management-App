import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemUpdateManyMutationInputObjectSchema as SaleItemUpdateManyMutationInputObjectSchema } from './objects/SaleItemUpdateManyMutationInput.schema';
import { SaleItemWhereInputObjectSchema as SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';

export const SaleItemUpdateManySchema: z.ZodType<Prisma.SaleItemUpdateManyArgs> = z.object({ data: SaleItemUpdateManyMutationInputObjectSchema, where: SaleItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleItemUpdateManyArgs>;

export const SaleItemUpdateManyZodSchema = z.object({ data: SaleItemUpdateManyMutationInputObjectSchema, where: SaleItemWhereInputObjectSchema.optional() }).strict();