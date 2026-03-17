import { IUserRoles } from '../repositories/User/IUserRoles';
import { Expense } from './Expense';
import { Revenue } from './Revenue';

export class User {
  createdAt: Date;
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private expense: Expense,
    private revenue: Revenue,
    private role: IUserRoles = 'user'
  ) {
    if (!id || !name || !email || !password) {
      throw new Error('Information is missing to create the user');
    }

    this.createdAt = new Date();
  }

  get userId() {
    return this.id;
  }

  get userName() {
    return this.name;
  }

  get userEmail() {
    return this.email;
  }

  changeName(name: string) {
    if (name == this.name) {
      throw new Error('Name is already being used');
    }
    this.name = name;
  }

  changeEmail(email: string) {
    if (email == this.email) {
      throw new Error('Email is already being used');
    }
    this.email = email;
  }

  changePassword(password: string) {
    if (password == this.password) {
      throw new Error('Password is already being used');
    }
    this.password = password;
  }
}
