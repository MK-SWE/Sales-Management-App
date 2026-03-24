import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './objects/SaleItemSelect.schema';
import { SaleItemIncludeObjectSchema as SaleItemIncludeObjectSchema } from './objects/SaleItemInclude.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';

export const SaleItemFindUniqueSchema: z.ZodType<Prisma.SaleItemFindUniqueArgs> = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), where: SaleItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleItemFindUniqueArgs>;

export const SaleItemFindUniqueZodSchema = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), where: SaleItemWhereUniqueInputObjectSchema }).strict();