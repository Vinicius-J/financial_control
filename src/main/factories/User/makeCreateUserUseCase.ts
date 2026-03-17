import { CreateUserUseCase } from '../../../application/useCases/User/CreateUserUseCase';
import { InDatabaseUserRepository } from '../../../infrastructure/repositories/InDatabaseUserRepository';

export function makeCreateUserUseCase() {
  const repository = new InDatabaseUserRepository();
  return new CreateUserUseCase(repository);
}
