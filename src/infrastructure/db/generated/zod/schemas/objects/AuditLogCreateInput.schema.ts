import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutAuditLogsInputObjectSchema as UserCreateNestedOneWithoutAuditLogsInputObjectSchema } from './UserCreateNestedOneWithoutAuditLogsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  entityName: z.string(),
  entityId: z.string(),
  action: z.string(),
  changes: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAuditLogsInputObjectSchema).optional()
}).strict();
export const AuditLogCreateInputObjectSchema: z.ZodType<Prisma.AuditLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateInput>;
export const AuditLogCreateInputObjectZodSchema = makeSchema();
