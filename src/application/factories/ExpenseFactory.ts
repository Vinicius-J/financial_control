import { randomUUID } from 'crypto';
import { Expense } from '../../domain/entities/Expense';
import { TypeExpenseCategory } from '../../domain/enums/TypeExpenseCategory';

export class ExpenseFactory {
  static create(
    userId: string,
    amount: number,
    description: string,
    category: TypeExpenseCategory,
    acquisitionDate: string,
    id?: string
  ): Expense {
    return new Expense(
      { userId, amount, description, category, acquisitionDate },
      id || randomUUID()
    );
  }
}
