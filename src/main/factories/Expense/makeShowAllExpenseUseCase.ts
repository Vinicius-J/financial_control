import { MongoDBExpenseRepository } from '../../../infrastructure/repositories/MongoDBExpenseRepository';
import { ShowAllExpenseUseCase } from '../../../application/useCases/Expense/ShowAllExpenseUseCase';

export function makeShowAllExpenseUseCase() {
  const repository = new MongoDBExpenseRepository();
  return new ShowAllExpenseUseCase(repository);
}
