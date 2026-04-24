import { UpdateExpenseUseCase } from '../../../application/useCases/Expense/UpdateExpenseUseCase';
import { MongoDBExpenseRepository } from '../../../infrastructure/repositories/MongoDBExpenseRepository';

export function makeUpdateExpenseUseCase() {
  const repository = new MongoDBExpenseRepository();
  return new UpdateExpenseUseCase(repository);
}
