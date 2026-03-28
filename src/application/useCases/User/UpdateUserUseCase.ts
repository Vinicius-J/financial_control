import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/User/IUserRepository';
import { UserFactory } from '../../factories/UserFactory';

export class UpdateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(userId: string, body: User): Promise<User | undefined> {
    const user = await this.repository.findById(userId);

    if (!user) throw new Error('User not found');

    const newUser = UserFactory.update(userId, body.name, body.email, body.password, user.password);

    await this.repository.update(userId, newUser);

    return newUser;
  }
}
