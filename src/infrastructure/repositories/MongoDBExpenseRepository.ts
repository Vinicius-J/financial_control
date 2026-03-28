import { Expense } from '../../domain/entities/Expense';
import { IExpenseRepository } from '../../domain/repositories/Expense/IExpenseRepository';
import { ExpenseMapper } from '../mappers/ExpenseMapper';
import ExpenseModel from '../models/ExpenseModel';

export class MongoDBExpenseRepository implements IExpenseRepository {
  async save(expense: Expense): Promise<Expense> {
    await ExpenseModel.create({
      _id: expense.id,
      userId: expense.userId,
      amount: expense.amount,
      description: expense.description,
      category: expense.category,
      acquisitionDate: expense.acquisitionDate,
    });

    return expense;
  }

  async findAll(userId: string): Promise<Expense[] | undefined> {
    const expenses = await ExpenseModel.find({ userId });
    return expenses.map(ExpenseMapper.toDomain);
  }

  findById(expenseId: string): Promise<Expense | undefined> {
    throw new Error('Method not implemented.');
  }
}
