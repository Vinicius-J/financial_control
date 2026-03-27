import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/User/IUserRepository';
import UserModel from '../models/UserModel';

export class MongoDBUserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    await UserModel.create(user);
  }

  async findAll(): Promise<User[] | undefined> {
    const users = await UserModel.find();
    return users;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await UserModel.findById(id);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ email });
    return user;
  }

  async update(id: string, newUser: User): Promise<User> {
    const user = await UserModel.findByIdAndUpdate(id, newUser, { new: true });
    return user;
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete({ _id: id });
  }
}
