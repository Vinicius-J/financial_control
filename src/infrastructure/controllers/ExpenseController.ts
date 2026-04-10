import { Request, Response } from 'express';
import { makeCreateExpenseUseCase } from '../../main/factories/Expense/makeCreateExpenseUseCase';
import { makeFindAllExpenseUseCase } from '../../main/factories/Expense/makeFindAllExpenseUseCase';
import { makeFindExpenseByIdUseCase } from '../../main/factories/Expense/makeFindExpenseByIdUseCase';

export class ExpenseController {
  async index(req: Request, res: Response) {
    try {
      const userId = String(req.params.userId);
      const useCase = makeFindAllExpenseUseCase();

      const expenses = await useCase.execute(userId);

      return res.status(200).json(expenses);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const id = String(req.params.id);
      const useCase = makeFindExpenseByIdUseCase();

      const expenses = await useCase.execute(id);

      return res.status(200).json(expenses);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async store(req: Request, res: Response) {
    try {
      const userId = String(req.params.userId);

      const useCase = makeCreateExpenseUseCase();

      const expense = await useCase.execute(userId, req.body);

      return res.status(201).json(expense);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
