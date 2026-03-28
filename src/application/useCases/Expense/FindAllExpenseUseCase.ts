import { IExpenseRepository } from '../../../domain/repositories/Expense/IExpenseRepository';

export class FindAllExpenseUseCase {
  constructor(private repository: IExpenseRepository) {}

  async execute(userId: string) {
    const expenses = await this.repository.findAll(userId);
    return expenses;
  }
}
