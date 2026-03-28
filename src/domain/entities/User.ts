import { IUserRoles } from '../enums/IUserRoles';

interface UserProps {
  name: string;
  email: string;
  password: string;
  role: IUserRoles;
}

export class User {
  public name: string;
  public email: string;
  public password: string;
  public role: IUserRoles;
  constructor(
    props: UserProps,
    public readonly id: string
  ) {
    this.id = id;

    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.role = 'user';

    this.validate();
  }

  private validate() {
    if (!this.name || !this.email || !this.password) {
      throw new Error('Information is missing to create the user');
    }
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
