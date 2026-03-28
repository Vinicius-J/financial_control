export class Expense {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public amount: number
  ) {}
}
