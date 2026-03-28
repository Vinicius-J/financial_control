import { TypeExpenseCategory } from '../../../domain/enums/TypeExpenseCategory';
import { IExpenseRepository } from '../../../domain/repositories/Expense/IExpenseRepository';
import { ExpenseFactory } from '../../factories/ExpenseFactory';

export class CreateExpenseUseCase {
  constructor(private repository: IExpenseRepository) {}

  async execute(
    userId: string,
    body: {
      amount: number;
      description: string;
      category: TypeExpenseCategory;
      acquisitionDate: string;
    }
  ) {
    const { amount, description, category, acquisitionDate } = body;

    const newExpense = ExpenseFactory.create(
      userId,
      amount,
      description,
      category,
      acquisitionDate
    );

    await this.repository.save(newExpense);

    return newExpense;
  }
}
