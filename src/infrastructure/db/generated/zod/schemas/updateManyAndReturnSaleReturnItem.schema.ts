import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemSelectObjectSchema as SaleReturnItemSelectObjectSchema } from './objects/SaleReturnItemSelect.schema';
import { SaleReturnItemUpdateManyMutationInputObjectSchema as SaleReturnItemUpdateManyMutationInputObjectSchema } from './objects/SaleReturnItemUpdateManyMutationInput.schema';
import { SaleReturnItemWhereInputObjectSchema as SaleReturnItemWhereInputObjectSchema } from './objects/SaleReturnItemWhereInput.schema';

export const SaleReturnItemUpdateManyAndReturnSchema: z.ZodType<Prisma.SaleReturnItemUpdateManyAndReturnArgs> = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), data: SaleReturnItemUpdateManyMutationInputObjectSchema, where: SaleReturnItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemUpdateManyAndReturnArgs>;

export const SaleReturnItemUpdateManyAndReturnZodSchema = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), data: SaleReturnItemUpdateManyMutationInputObjectSchema, where: SaleReturnItemWhereInputObjectSchema.optional() }).strict();