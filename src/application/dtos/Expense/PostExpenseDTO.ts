import { TypeExpenseCategory } from '../../../domain/enums/TypeExpenseCategory';

export interface PostExpenseDTO {
  amount: number;
  description: string;
  category: TypeExpenseCategory;
  acquisitionDate: string;
}
