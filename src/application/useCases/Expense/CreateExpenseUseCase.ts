import { IExpenseRepository } from '../../../domain/repositories/Expense/IExpenseRepository';
import { PostExpenseDTO } from '../../dtos/Expense/PostExpenseDTO';
import { ExpenseFactory } from '../../factories/ExpenseFactory';

export class CreateExpenseUseCase {
  constructor(private repository: IExpenseRepository) {}

  async execute(userId: string, body: PostExpenseDTO) {
    const { amount, description, category, expenseDate } = body;

    const newExpense = ExpenseFactory.create(userId, amount, description, category, expenseDate);

    await this.repository.save(newExpense);

    return newExpense;
  }
}
