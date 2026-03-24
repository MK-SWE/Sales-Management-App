import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './objects/SaleSelect.schema';
import { SaleUpdateManyMutationInputObjectSchema as SaleUpdateManyMutationInputObjectSchema } from './objects/SaleUpdateManyMutationInput.schema';
import { SaleWhereInputObjectSchema as SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';

export const SaleUpdateManyAndReturnSchema: z.ZodType<Prisma.SaleUpdateManyAndReturnArgs> = z.object({ select: SaleSelectObjectSchema.optional(), data: SaleUpdateManyMutationInputObjectSchema, where: SaleWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleUpdateManyAndReturnArgs>;

export const SaleUpdateManyAndReturnZodSchema = z.object({ select: SaleSelectObjectSchema.optional(), data: SaleUpdateManyMutationInputObjectSchema, where: SaleWhereInputObjectSchema.optional() }).strict();