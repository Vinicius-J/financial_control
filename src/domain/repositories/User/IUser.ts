import { Expense } from '../../entities/Expense';
import { Revenue } from '../../entities/Revenue';
import { IUserRoles } from '../../enums/IUserRoles';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  expense: Expense;
  revenue: Revenue;
  role: IUserRoles;
  createdAt: Date;
}
