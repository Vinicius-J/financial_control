import { TypeUserRoles } from '../enums/TypeUserRoles';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

export class User {
  public name: string;
  public email: string;
  public password: string;
  public role: TypeUserRoles;
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
}
