import { TypeUserRoles } from '../../../domain/enums/TypeUserRoles';

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role?: TypeUserRoles;
}
