import { IUserRepository } from '../../../domain/repositories/User/IUserRepository';
import { PostUserDTO } from '../../dtos/User/PostUserDTO';
import { UserFactory } from '../../factories/UserFactory';

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(body: PostUserDTO) {
    const userExists = await this.repository.findByEmail(body.email);

    if (userExists) throw new Error('User already exists');

    const user = UserFactory.create(body.name, body.email, body.password);

    return await this.repository.save(user);
  }
}
