import { ResCreateUserDTO } from '../../application/dtos/User/ResCreateUserDTO';
import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/User/IUserRepository';
import { UserMapper } from '../mappers/UserMapper';
import UserModel from '../models/UserModel';

export class MongoDBUserRepository implements IUserRepository {
  async save(user: User): Promise<ResCreateUserDTO> {
    await UserModel.create({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async findAll(): Promise<User[] | undefined> {
    const users = await UserModel.find();

    return users.map(UserMapper.toDomain);
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await UserModel.findById(id);

    if (!user) return;

    return UserMapper.toDomain(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ email });

    if (!user) return;

    return UserMapper.toDomain(user);
  }

  async update(id: string, newUser: User): Promise<User> {
    const user = await UserModel.findOneAndUpdate({ _id: id }, newUser, {
      returnDocument: 'after',
    });

    return UserMapper.toDomain(user);
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
