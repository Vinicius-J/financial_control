import { IExpenseRepository } from '../../../domain/repositories/Expense/IExpenseRepository';

export class FindExpenseByIdUseCase {
  constructor(private repository: IExpenseRepository) {}

  async execute(id: string) {
    const user = await this.repository.findById(id);

    if (!user) throw new Error('User not found');

    const expense = await this.repository.findById(id);

    if (!expense) throw new Error('Expense not found');

    return expense;
  }
}
