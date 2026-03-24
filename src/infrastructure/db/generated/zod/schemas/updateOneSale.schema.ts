import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './objects/SaleSelect.schema';
import { SaleIncludeObjectSchema as SaleIncludeObjectSchema } from './objects/SaleInclude.schema';
import { SaleUpdateInputObjectSchema as SaleUpdateInputObjectSchema } from './objects/SaleUpdateInput.schema';
import { SaleUncheckedUpdateInputObjectSchema as SaleUncheckedUpdateInputObjectSchema } from './objects/SaleUncheckedUpdateInput.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';

export const SaleUpdateOneSchema: z.ZodType<Prisma.SaleUpdateArgs> = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), data: z.union([SaleUpdateInputObjectSchema, SaleUncheckedUpdateInputObjectSchema]), where: SaleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleUpdateArgs>;

export const SaleUpdateOneZodSchema = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), data: z.union([SaleUpdateInputObjectSchema, SaleUncheckedUpdateInputObjectSchema]), where: SaleWhereUniqueInputObjectSchema }).strict();