import { Expense } from '../../domain/entities/Expense';

export class ExpenseMapper {
  static toDomain(expense: any) {
    return new Expense(expense._id, expense.userId, expense.amount);
  }
}
