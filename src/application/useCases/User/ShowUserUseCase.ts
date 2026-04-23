import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/User/IUserRepository';

export class ShowUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(userId: string): Promise<User | undefined> {
    const user = await this.repository.findById(userId);

    if (!user) throw new Error('User not found');

    return user;
  }
}
