import { UpdateUserUseCase } from '../../../application/useCases/User/UpdateUserUseCase';
import { MongoDBUserRepository } from '../../../infrastructure/repositories/MongoDBUserRepository';

export function makeUpdateUserUseCase() {
  const repository = new MongoDBUserRepository();
  return new UpdateUserUseCase(repository);
}
