import { FindUserByIdUseCase } from '../../../application/useCases/User/FindUserByIdUseCase';
import { MongoDBUserRepository } from '../../../infrastructure/repositories/MongoDBUserRepository';

export function makeFindUserByIdUseCase() {
  const repository = new MongoDBUserRepository();
  return new FindUserByIdUseCase(repository);
}
