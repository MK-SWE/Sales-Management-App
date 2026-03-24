import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemSelectObjectSchema as SaleReturnItemSelectObjectSchema } from './objects/SaleReturnItemSelect.schema';
import { SaleReturnItemIncludeObjectSchema as SaleReturnItemIncludeObjectSchema } from './objects/SaleReturnItemInclude.schema';
import { SaleReturnItemUpdateInputObjectSchema as SaleReturnItemUpdateInputObjectSchema } from './objects/SaleReturnItemUpdateInput.schema';
import { SaleReturnItemUncheckedUpdateInputObjectSchema as SaleReturnItemUncheckedUpdateInputObjectSchema } from './objects/SaleReturnItemUncheckedUpdateInput.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './objects/SaleReturnItemWhereUniqueInput.schema';

export const SaleReturnItemUpdateOneSchema: z.ZodType<Prisma.SaleReturnItemUpdateArgs> = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), data: z.union([SaleReturnItemUpdateInputObjectSchema, SaleReturnItemUncheckedUpdateInputObjectSchema]), where: SaleReturnItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateArgs>;

export const SaleReturnItemUpdateOneZodSchema = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), data: z.union([SaleReturnItemUpdateInputObjectSchema, SaleReturnItemUncheckedUpdateInputObjectSchema]), where: SaleReturnItemWhereUniqueInputObjectSchema }).strict();