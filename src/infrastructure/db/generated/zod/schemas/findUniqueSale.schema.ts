import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './objects/SaleSelect.schema';
import { SaleIncludeObjectSchema as SaleIncludeObjectSchema } from './objects/SaleInclude.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';

export const SaleFindUniqueSchema: z.ZodType<Prisma.SaleFindUniqueArgs> = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), where: SaleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleFindUniqueArgs>;

export const SaleFindUniqueZodSchema = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), where: SaleWhereUniqueInputObjectSchema }).strict();