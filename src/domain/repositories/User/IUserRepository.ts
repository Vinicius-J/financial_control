import { ResCreateUserDTO } from '../../../application/dtos/User/ResCreateUserDTO';
import { User } from '../../entities/User';

export interface IUserRepository {
  save(user: User): Promise<ResCreateUserDTO>;
  findAll(): Promise<User[] | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
