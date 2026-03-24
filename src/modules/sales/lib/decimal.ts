// Matches positive decimals with up to 3 decimal places
export const DECIMAL_REGEX = /^\d+(\.\d{1,3})?$/;

export function isValidDecimalString(val: string): boolean {
  return DECIMAL_REGEX.test(val);
}
