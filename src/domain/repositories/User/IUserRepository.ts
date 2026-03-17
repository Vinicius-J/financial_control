import { User } from '../../entities/User';

export interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  update(id: string): Promise<User>;
  delete(id: string): Promise<void>;
}
