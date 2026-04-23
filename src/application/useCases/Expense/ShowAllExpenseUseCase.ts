import { IExpenseRepository } from '../../../domain/repositories/Expense/IExpenseRepository';

export class ShowAllExpenseUseCase {
  constructor(private repository: IExpenseRepository) {}

  async execute(userId: string) {
    const expenses = await this.repository.findAll(userId);
    return expenses;
  }
}
