import { User } from '../../entities/User';

export interface IUserRepository {
  save(user: User): Promise<void>;
  findAll(): Promise<User[] | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
