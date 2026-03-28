import { DeleteUserUseCase } from '../../../application/useCases/User/DeleteUserUseCase';
import { MongoDBUserRepository } from '../../../infrastructure/repositories/MongoDBUserRepository';

export function makeDeleteUserUseCase() {
  const repository = new MongoDBUserRepository();
  return new DeleteUserUseCase(repository);
}
