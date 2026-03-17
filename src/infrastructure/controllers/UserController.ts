import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../main/factories/User/makeCreateUserUseCase';

export class UserController {
  async index(req: Request, res: Response) {
    try {
      return res.status(200).json({ message: 'User' });
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async store(req: Request, res: Response) {
    try {
      const useCase = makeCreateUserUseCase();
      const user = useCase.execute(req.body);
      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
