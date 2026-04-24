import { IExpenseRepository } from '../../../domain/repositories/Expense/IExpenseRepository';

export class DeleteExpenseUseCase {
  constructor(private repository: IExpenseRepository) {}

  async execute(expenseId: string) {
    const expense = await this.repository.findById(expenseId);

    if (!expense) throw new Error('Expense not found');

    await this.repository.delete(expenseId);

    return expense;
  }
}
