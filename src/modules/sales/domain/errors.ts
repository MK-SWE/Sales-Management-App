export class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class InsufficientStockError extends DomainError {}
export class InvalidClientError extends DomainError {}
export class CreditLimitExceededError extends DomainError {}
export class InvalidTransferError extends DomainError {}
export class EntityNotFoundError extends DomainError {}
export class ValidationError extends DomainError {}
