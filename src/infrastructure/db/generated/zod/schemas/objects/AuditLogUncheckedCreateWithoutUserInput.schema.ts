import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  entityName: z.string(),
  entityId: z.string(),
  action: z.string(),
  changes: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AuditLogUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AuditLogUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUncheckedCreateWithoutUserInput>;
export const AuditLogUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
