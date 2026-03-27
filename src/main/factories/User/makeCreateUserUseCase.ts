import { CreateUserUseCase } from '../../../application/useCases/User/CreateUserUseCase';
import { MongoDBUserRepository } from '../../../infrastructure/repositories/MongoDBUserRepository';

export function makeCreateUserUseCase() {
  const repository = new MongoDBUserRepository();
  return new CreateUserUseCase(repository);
}
