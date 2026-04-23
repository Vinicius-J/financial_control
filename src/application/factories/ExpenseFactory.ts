import { randomUUID } from 'crypto';
import { Expense } from '../../domain/entities/Expense';
import { TypeExpenseCategory } from '../../domain/enums/TypeExpenseCategory';

export class ExpenseFactory {
  static create(
    userId: string,
    amount: number,
    description: string,
    category: TypeExpenseCategory,
    expenseDate: string,
    id?: string
  ): Expense {
    return new Expense({ userId, amount, description, category, expenseDate }, id || randomUUID());
  }
}
