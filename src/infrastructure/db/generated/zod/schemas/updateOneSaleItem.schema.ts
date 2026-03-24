import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleItemSelectObjectSchema as SaleItemSelectObjectSchema } from './objects/SaleItemSelect.schema';
import { SaleItemIncludeObjectSchema as SaleItemIncludeObjectSchema } from './objects/SaleItemInclude.schema';
import { SaleItemUpdateInputObjectSchema as SaleItemUpdateInputObjectSchema } from './objects/SaleItemUpdateInput.schema';
import { SaleItemUncheckedUpdateInputObjectSchema as SaleItemUncheckedUpdateInputObjectSchema } from './objects/SaleItemUncheckedUpdateInput.schema';
import { SaleItemWhereUniqueInputObjectSchema as SaleItemWhereUniqueInputObjectSchema } from './objects/SaleItemWhereUniqueInput.schema';

export const SaleItemUpdateOneSchema: z.ZodType<Prisma.SaleItemUpdateArgs> = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), data: z.union([SaleItemUpdateInputObjectSchema, SaleItemUncheckedUpdateInputObjectSchema]), where: SaleItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaleItemUpdateArgs>;

export const SaleItemUpdateOneZodSchema = z.object({ select: SaleItemSelectObjectSchema.optional(), include: SaleItemIncludeObjectSchema.optional(), data: z.union([SaleItemUpdateInputObjectSchema, SaleItemUncheckedUpdateInputObjectSchema]), where: SaleItemWhereUniqueInputObjectSchema }).strict();