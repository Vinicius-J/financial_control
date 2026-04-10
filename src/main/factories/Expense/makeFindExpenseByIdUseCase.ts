import { MongoDBExpenseRepository } from '../../../infrastructure/repositories/MongoDBExpenseRepository';
import { FindExpenseByIdUseCase } from '../../../application/useCases/Expense/FindExpenseByIdUseCase';

export function makeFindExpenseByIdUseCase() {
  const repository = new MongoDBExpenseRepository();
  return new FindExpenseByIdUseCase(repository);
}
