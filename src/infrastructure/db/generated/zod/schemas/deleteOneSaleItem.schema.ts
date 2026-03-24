import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './objects/SaleItemSelect.schema';
import { SaleItemIncludeObjectSchema as SaleItemIncludeObjectSchema } from './objects/SaleItemInclude.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';

export const SaleItemDeleteOneSchema: z.ZodType<Prisma.SaleItemDeleteArgs> = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), where: SaleItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleItemDeleteArgs>;

export const SaleItemDeleteOneZodSchema = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), where: SaleItemWhereUniqueInputObjectSchema }).strict();