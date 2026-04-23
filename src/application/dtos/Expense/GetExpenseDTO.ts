import { TypeExpenseCategory } from '../../../domain/enums/TypeExpenseCategory';

export interface GetExpenseDTO {
  amount: number;
  description: string;
  category: TypeExpenseCategory;
  expenseDate: string;
}
