'use server';

import { auth } from '@/lib/auth'; // TODO: the auth path must be wired to the real better-auth instance
import { headers } from 'next/headers';
import { recordInventoryTransfer } from '@/modules/sales/services/transfers.service';
import { CreateTransferSchema } from '@/modules/sales/schemas/transfer.schemas';
import { DomainError } from '@/modules/sales/domain/errors';
import { z } from 'zod';

export async function createTransferAction(formData: FormData) {
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
    
    const parsedData = CreateTransferSchema.parse(rawData);
    
    const transfer = await recordInventoryTransfer(parsedData, userId);

    return { 
      success: true, 
      data: {
        transferId: transfer.id,
        transferNumber: transfer.transferNumber
      } 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed", details: error.errors };
    }
    if (error instanceof DomainError) {
      return { success: false, error: error.message };
    }
    console.error('Transfer error:', error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
