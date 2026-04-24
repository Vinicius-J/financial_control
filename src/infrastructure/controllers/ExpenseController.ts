import { Request, Response } from 'express';
import { makeCreateExpenseUseCase } from '../../main/factories/Expense/makeCreateExpenseUseCase';
import { makeShowAllExpenseUseCase } from '../../main/factories/Expense/makeShowAllExpenseUseCase';
import { makeFindExpenseByIdUseCase } from '../../main/factories/Expense/makeFindExpenseByIdUseCase';
import { makeUpdateExpenseUseCase } from '../../main/factories/Expense/makeUpdateExpenseUseCase';
import { makeDeleteExpenseUseCase } from '../../main/factories/Expense/makeDeleteExpenseUseCase';

export class ExpenseController {
  async index(req: Request, res: Response) {
    try {
      const userId = String(req.params.userId);
      const useCase = makeShowAllExpenseUseCase();

      const expenses = await useCase.execute(userId);

      if (expenses?.length) return res.status(200).json(expenses);

      return res.status(200).json({ message: 'Expenses' });
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

  async update(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const useCase = makeUpdateExpenseUseCase();

      const expense = await useCase.execute(id, req.body);

      return res.status(200).json(expense);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const useCase = makeDeleteExpenseUseCase();

      const expense = await useCase.execute(id);

      return res.status(200).json(expense);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
