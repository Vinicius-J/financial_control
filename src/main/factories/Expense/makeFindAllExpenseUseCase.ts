import { MongoDBExpenseRepository } from '../../../infrastructure/repositories/MongoDBExpenseRepository';
import { FindAllExpenseUseCase } from '../../../application/useCases/Expense/FindAllExpenseUseCase';

export function makeFindAllExpenseUseCase() {
  const repository = new MongoDBExpenseRepository();
  return new FindAllExpenseUseCase(repository);
}
