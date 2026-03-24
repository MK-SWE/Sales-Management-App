import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleUpdateManyMutationInputObjectSchema as SaleUpdateManyMutationInputObjectSchema } from './objects/SaleUpdateManyMutationInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';

export const SaleUpdateManySchema: z.ZodType<Prisma.SaleUpdateManyArgs> = z.object({ data: SaleUpdateManyMutationInputObjectSchema, where: SaleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleUpdateManyArgs>;

export const SaleUpdateManyZodSchema = z.object({ data: SaleUpdateManyMutationInputObjectSchema, where: SaleWhereInputObjectSchema.optional() }).strict();