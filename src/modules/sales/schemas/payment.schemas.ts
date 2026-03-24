import { z } from 'zod';
import { DECIMAL_REGEX } from '../lib/decimal';

export const CreatePaymentSchema = z.object({
  clientId: z.string().uuid(),
  amount: z.string().regex(DECIMAL_REGEX, "Invalid amount format").refine((val) => parseFloat(val) > 0, "Payment amount must be greater than 0"),
  paymentDate: z.string().datetime(),
  notes: z.string().optional(),
});
