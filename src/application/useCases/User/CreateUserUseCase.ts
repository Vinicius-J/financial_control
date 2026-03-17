import { IUserRepository } from '../../../domain/repositories/User/IUserRepository';
import { CreateUserDTO } from '../../dtos/User/CreateUserDTO';
import { ReturnCreatedUserDTO } from '../../dtos/User/ReturnCreatedUserDTO';
import { UserFactory } from '../../factories/UserFactory';

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(body: CreateUserDTO): Promise<ReturnCreatedUserDTO> {
    const userExists = await this.repository.findByEmail(body.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = UserFactory.create(body.name, body.email, body.password);

    await this.repository.save(user);

    return {
      id: user.userId,
      name: user.userName,
      email: user.userEmail,
      createdAt: user.createdAt,
    };
  }
}
