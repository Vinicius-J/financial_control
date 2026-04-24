import { DeleteExpenseUseCase } from '../../../application/useCases/Expense/DeleteExpenseUseCase';
import { MongoDBExpenseRepository } from '../../../infrastructure/repositories/MongoDBExpenseRepository';

export function makeDeleteExpenseUseCase() {
  const repository = new MongoDBExpenseRepository();
  return new DeleteExpenseUseCase(repository);
}
