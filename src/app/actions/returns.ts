'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { recordSaleReturn } from '@/modules/sales/services/returns.service';
import { CreateReturnSchema } from '@/modules/sales/schemas/sale.schemas';
import { DomainError } from '@/modules/sales/domain/errors';
import { z } from 'zod';

export async function createReturnAction(formData: FormData) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });
    
    if (!session || !session.user || !session.user.id) {
      return { success: false, error: "Unauthorized. Please log in." };
    }
    const userId = session.user.id;

    const payloadString = formData.get('payload');
    if (!payloadString || typeof payloadString !== 'string') {
      return { success: false, error: "Missing form payload" };
    }
    const rawData = JSON.parse(payloadString);
    
    const parsedData = CreateReturnSchema.parse(rawData);
    
    const saleReturn = await recordSaleReturn(parsedData, userId) as {
      id: string;
      returnNumber: string;
      grandTotal: { toString(): string };
    };

    return { 
      success: true, 
      data: {
        returnId: saleReturn.id,
        returnNumber: saleReturn.returnNumber,
        grandTotal: saleReturn.grandTotal.toString()
      } 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed", details: error.issues };
    }
    if (error instanceof DomainError) {
      return { success: false, error: error.message };
    }
    console.error('Return error:', error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
