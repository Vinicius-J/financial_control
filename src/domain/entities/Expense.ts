import { TypeExpenseCategory } from '../enums/TypeExpenseCategory';

interface ExpenseProps {
  userId: string;
  amount: number;
  description: string;
  category: TypeExpenseCategory;
  acquisitionDate: string;
}

export class Expense {
  public readonly userId: string;
  public amount: number;
  public description: string;
  public category: TypeExpenseCategory;
  public acquisitionDate: string;

  constructor(
    props: ExpenseProps,
    public readonly id: string
  ) {
    this.userId = props.userId;
    this.amount = props.amount;
    this.description = props.description;
    this.category = props.category;
    this.acquisitionDate = props.acquisitionDate;
  }
}
