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
export const AuditLogCreateManyUserInputObjectSchema: z.ZodType<Prisma.AuditLogCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateManyUserInput>;
export const AuditLogCreateManyUserInputObjectZodSchema = makeSchema();
