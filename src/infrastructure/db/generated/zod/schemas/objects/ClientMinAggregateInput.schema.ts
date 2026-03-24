import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  code: z.literal(true).optional(),
  name: z.literal(true).optional(),
  isOpenAccountEnabled: z.literal(true).optional(),
  isBlocked: z.literal(true).optional(),
  creditLimit: z.literal(true).optional(),
  currentBalance: z.literal(true).optional(),
  contactInfo: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ClientMinAggregateInputObjectSchema: z.ZodType<Prisma.ClientMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientMinAggregateInputType>;
export const ClientMinAggregateInputObjectZodSchema = makeSchema();
