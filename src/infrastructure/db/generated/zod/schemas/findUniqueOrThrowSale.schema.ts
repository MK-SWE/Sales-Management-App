import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleSelectObjectSchema as SaleSelectObjectSchema } from './objects/SaleSelect.schema';
import { SaleIncludeObjectSchema as SaleIncludeObjectSchema } from './objects/SaleInclude.schema';
import { SaleWhereUniqueInputObjectSchema as SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';

export const SaleFindUniqueOrThrowSchema: z.ZodType<Prisma.SaleFindUniqueOrThrowArgs> = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), where: SaleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleFindUniqueOrThrowArgs>;

export const SaleFindUniqueOrThrowZodSchema = z.object({ select: SaleSelectObjectSchema.optional(), include: SaleIncludeObjectSchema.optional(), where: SaleWhereUniqueInputObjectSchema }).strict();