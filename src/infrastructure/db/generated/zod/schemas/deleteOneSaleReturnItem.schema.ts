import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemSelectObjectSchema as SaleReturnItemSelectObjectSchema } from './objects/SaleReturnItemSelect.schema';
import { SaleReturnItemIncludeObjectSchema as SaleReturnItemIncludeObjectSchema } from './objects/SaleReturnItemInclude.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './objects/SaleReturnItemWhereUniqueInput.schema';

export const SaleReturnItemDeleteOneSchema: z.ZodType<Prisma.SaleReturnItemDeleteArgs> = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), where: SaleReturnItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemDeleteArgs>;

export const SaleReturnItemDeleteOneZodSchema = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), where: SaleReturnItemWhereUniqueInputObjectSchema }).strict();