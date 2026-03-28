import { Expense } from '../../entities/Expense';

export interface IExpenseRepository {
  save(expense: Expense): Promise<Expense>;
  findAll(userId: string): Promise<Expense[] | undefined>;
  findById(expenseId: string): Promise<Expense | undefined>;
}
