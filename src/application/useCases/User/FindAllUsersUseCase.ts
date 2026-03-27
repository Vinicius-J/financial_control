import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/User/IUserRepository';

export class FindAllUsersUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(): Promise<User[] | undefined> {
    const users = await this.repository.findAll();
    return users;
  }
}
