import { Expense } from '../../../domain/entities/Expense';
import { IExpenseRepository } from '../../../domain/repositories/Expense/IExpenseRepository';
import { ExpenseFactory } from '../../factories/ExpenseFactory';

export class UpdateExpenseUseCase {
  constructor(private repository: IExpenseRepository) {}

  async execute(expenseId: string, body: Expense) {
    const expense = await this.repository.findById(expenseId);

    if (!expense) throw new Error('Expense not found');

    const newExpense = ExpenseFactory.update(
      expenseId,
      expense.userId,
      body.amount,
      body.description,
      body.category,
      body.expenseDate
    );

    await this.repository.update(expenseId, newExpense);

    return newExpense;
  }
}
