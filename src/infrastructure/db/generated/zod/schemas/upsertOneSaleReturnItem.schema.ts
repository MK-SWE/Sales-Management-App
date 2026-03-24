import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemSelectObjectSchema as SaleReturnItemSelectObjectSchema } from './objects/SaleReturnItemSelect.schema';
import { SaleReturnItemIncludeObjectSchema as SaleReturnItemIncludeObjectSchema } from './objects/SaleReturnItemInclude.schema';
import { SaleReturnItemWhereUniqueInputObjectSchema as SaleReturnItemWhereUniqueInputObjectSchema } from './objects/SaleReturnItemWhereUniqueInput.schema';
import { SaleReturnItemCreateInputObjectSchema as SaleReturnItemCreateInputObjectSchema } from './objects/SaleReturnItemCreateInput.schema';
import { SaleReturnItemUncheckedCreateInputObjectSchema as SaleReturnItemUncheckedCreateInputObjectSchema } from './objects/SaleReturnItemUncheckedCreateInput.schema';
import { SaleReturnItemUpdateInputObjectSchema as SaleReturnItemUpdateInputObjectSchema } from './objects/SaleReturnItemUpdateInput.schema';
import { SaleReturnItemUncheckedUpdateInputObjectSchema as SaleReturnItemUncheckedUpdateInputObjectSchema } from './objects/SaleReturnItemUncheckedUpdateInput.schema';

export const SaleReturnItemUpsertOneSchema: z.ZodType<Prisma.SaleReturnItemUpsertArgs> = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), where: SaleReturnItemWhereUniqueInputObjectSchema, create: z.union([ SaleReturnItemCreateInputObjectSchema, SaleReturnItemUncheckedCreateInputObjectSchema ]), update: z.union([ SaleReturnItemUpdateInputObjectSchema, SaleReturnItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemUpsertArgs>;

export const SaleReturnItemUpsertOneZodSchema = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), where: SaleReturnItemWhereUniqueInputObjectSchema, create: z.union([ SaleReturnItemCreateInputObjectSchema, SaleReturnItemUncheckedCreateInputObjectSchema ]), update: z.union([ SaleReturnItemUpdateInputObjectSchema, SaleReturnItemUncheckedUpdateInputObjectSchema ]) }).strict();