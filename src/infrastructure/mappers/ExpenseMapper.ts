import { Expense } from '../../domain/entities/Expense';

export class ExpenseMapper {
  static toDomain(expense: any): Expense {
    return new Expense(
      {
        userId: expense.userId,
        amount: expense.amount,
        description: expense.description,
        category: expense.category,
        acquisitionDate: expense.acquisitionDate,
      },
      expense._id
    );
  }
}
