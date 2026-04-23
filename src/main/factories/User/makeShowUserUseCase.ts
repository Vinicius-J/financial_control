import { ShowUserUseCase } from '../../../application/useCases/User/ShowUserUseCase';
import { MongoDBUserRepository } from '../../../infrastructure/repositories/MongoDBUserRepository';

export function makeShowUserUseCase() {
  const repository = new MongoDBUserRepository();
  return new ShowUserUseCase(repository);
}
