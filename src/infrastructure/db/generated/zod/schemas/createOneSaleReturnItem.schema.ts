import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SaleReturnItemSelectObjectSchema as SaleReturnItemSelectObjectSchema } from './objects/SaleReturnItemSelect.schema';
import { SaleReturnItemIncludeObjectSchema as SaleReturnItemIncludeObjectSchema } from './objects/SaleReturnItemInclude.schema';
import { SaleReturnItemCreateInputObjectSchema as SaleReturnItemCreateInputObjectSchema } from './objects/SaleReturnItemCreateInput.schema';
import { SaleReturnItemUncheckedCreateInputObjectSchema as SaleReturnItemUncheckedCreateInputObjectSchema } from './objects/SaleReturnItemUncheckedCreateInput.schema';

export const SaleReturnItemCreateOneSchema: z.ZodType<Prisma.SaleReturnItemCreateArgs> = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), data: z.union([SaleReturnItemCreateInputObjectSchema, SaleReturnItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SaleReturnItemCreateArgs>;

export const SaleReturnItemCreateOneZodSchema = z.object({ select: SaleReturnItemSelectObjectSchema.optional(), include: SaleReturnItemIncludeObjectSchema.optional(), data: z.union([SaleReturnItemCreateInputObjectSchema, SaleReturnItemUncheckedCreateInputObjectSchema]) }).strict();