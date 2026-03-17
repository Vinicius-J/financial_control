import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/User/IUserRepository';

export class InDatabaseUserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }

  async update(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
