import { FindAllUsersUseCase } from '../../../application/useCases/User/FindAllUsersUseCase';
import { MongoDBUserRepository } from '../../../infrastructure/repositories/MongoDBUserRepository';

export function makeFindAllUsersUseCase() {
  const repository = new MongoDBUserRepository();
  return new FindAllUsersUseCase(repository);
}
