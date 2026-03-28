import { CreateExpenseUseCase } from '../../../application/useCases/Expense/CreateExpenseUseCase';
import { MongoDBExpenseRepository } from '../../../infrastructure/repositories/MongoDBExpenseRepository';

export function makeCreateExpenseUseCase() {
  const repository = new MongoDBExpenseRepository();
  return new CreateExpenseUseCase(repository);
}
