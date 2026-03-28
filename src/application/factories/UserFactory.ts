import bcryptjs from 'bcryptjs';
import { randomUUID } from 'crypto';
import { User } from '../../domain/entities/User';
import { Expense } from '../../domain/entities/Expense';
import { Revenue } from '../../domain/entities/Revenue';

export class UserFactory {
  static create(name: string, email: string, passwordNoHash: string, id?: string): User {
    const expense = new Expense();
    const revenue = new Revenue();
    const password = bcryptjs.hashSync(passwordNoHash, 8);

    return new User({ name, email, password, expense, revenue }, id || randomUUID());
  }
}
