import { TypeExpenseCategory } from '../enums/TypeExpenseCategory';

interface ExpenseProps {
  userId: string;
  amount: number;
  description: string;
  category: TypeExpenseCategory;
  expenseDate: string;
}

export class Expense {
  public readonly userId: string;
  public amount: number;
  public description: string;
  public category: TypeExpenseCategory;
  public expenseDate: string;

  constructor(
    props: ExpenseProps,
    public readonly id: string
  ) {
    this.userId = props.userId;
    this.id = id;
    this.amount = props.amount;
    this.description = props.description;
    this.category = props.category;
    this.expenseDate = props.expenseDate;

    this.validate();
  }

  private validate() {
    if (!this.amount || !this.description || !this.category || !this.expenseDate) {
      throw new Error('Information is missing to create the expense');
    }
  }
}
