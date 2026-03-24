import { z } from 'zod';
import { DECIMAL_REGEX } from '../lib/decimal';

export const CreateClientSchema = z.object({
  code: z.string().min(1),
  name: z.string().min(1),
  isOpenAccountEnabled: z.boolean().default(false),
  creditLimit: z.string().regex(DECIMAL_REGEX, "Invalid credit limit format").optional().nullable(),
  contactInfo: z.string().optional(),
});
