import bcryptjs from 'bcryptjs';
import { randomUUID } from 'crypto';
import { User } from '../../domain/entities/User';
import { Expense } from '../../domain/entities/Expense';
import { Revenue } from '../../domain/entities/Revenue';

export class UserFactory {
  static create(name: string, email: string, password: string): User {
    const expense = new Expense();
    const revenue = new Revenue();
    const passwordVo = bcryptjs.hashSync(password, 8);

    return new User(randomUUID(), name, email, passwordVo, expense, revenue);
  }
}
