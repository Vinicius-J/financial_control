import { TypeUserRoles } from '../../../domain/enums/TypeUserRoles';

export interface PostUserDTO {
  name: string;
  email: string;
  password: string;
  role?: TypeUserRoles;
}
