'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { recordSale } from '@/modules/sales/services/sales.service';
import { CreateSaleSchema } from '@/modules/sales/schemas/sale.schemas';
import { DomainError } from '@/modules/sales/domain/errors';
import { z } from 'zod';

export async function createSaleAction(formData: FormData) {
  try {
    // 1. Better-Auth Boundary
    const session = await auth.api.getSession({
      headers: await headers()
    });
    
    if (!session || !session.user || !session.user.id) {
      return { success: false, error: "Unauthorized. Please log in." };
    }
    const userId = session.user.id;

    // 2. Parse Payload
    const payloadString = formData.get('payload');
    if (!payloadString || typeof payloadString !== 'string') {
      return { success: false, error: "Missing form payload" };
    }
    const rawData = JSON.parse(payloadString);
    
    // 3. Validate Input
    const parsedData = CreateSaleSchema.parse(rawData);
    
    // 4. Execute Transaction
    const sale = await recordSale(parsedData, userId) as {
      id: string;
      saleNumber: string;
      amountDue: { toString(): string };
    };

    // 5. Return serializable data
    return { 
      success: true, 
      data: {
        saleId: sale.id,
        saleNumber: sale.saleNumber,
        amountDue: sale.amountDue.toString()
      } 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed", details: error.issues };
    }
    if (error instanceof DomainError) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
