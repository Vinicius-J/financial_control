import bcryptjs from 'bcryptjs';
import { randomUUID } from 'crypto';
import { User } from '../../domain/entities/User';

export class UserFactory {
  static create(name: string, email: string, passwordNoHash: string, id?: string): User {
    const password = bcryptjs.hashSync(passwordNoHash, 8);

    return new User({ name, email, password }, id || randomUUID());
  }

  static update(
    id: string,
    name: string,
    email: string,
    passwordBody: string,
    passwordUser: string,
  ): User {
    const valid = bcryptjs.compareSync(passwordBody, passwordUser);

    if (valid) {
      const password = passwordUser;
      return new User({ name, email, password }, id);
    }

    const password = bcryptjs.hashSync(passwordBody, 8);
    return new User({ name, email, password }, id);
  }
}
